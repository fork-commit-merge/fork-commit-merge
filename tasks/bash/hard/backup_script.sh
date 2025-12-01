#!/bin/bash

# Bash - Hard
# Automated Backup Script with Rotation
# Issue #5720

set -euo pipefail

# =============================================================================
# CONFIGURATION
# =============================================================================

# Backup destination
BACKUP_DIR="${BACKUP_DIR:-/var/backups}"
BACKUP_RETENTION_DAYS=7

# Directories to backup
BACKUP_SOURCES=("/etc" "/home" "/var/www")

# Database configuration
POSTGRES_ENABLED="${POSTGRES_ENABLED:-false}"
POSTGRES_USER="${POSTGRES_USER:-postgres}"
POSTGRES_DATABASES="${POSTGRES_DATABASES:-}"

MYSQL_ENABLED="${MYSQL_ENABLED:-false}"
MYSQL_USER="${MYSQL_USER:-root}"
MYSQL_PASSWORD="${MYSQL_PASSWORD:-}"
MYSQL_DATABASES="${MYSQL_DATABASES:-}"

# Minimum required disk space in MB
MIN_DISK_SPACE_MB=1000

# Notification email
NOTIFY_EMAIL="${NOTIFY_EMAIL:-}"

# Log file
LOG_DIR="${LOG_DIR:-/var/log/backup}"
LOG_FILE="${LOG_DIR}/backup_$(date +%Y%m%d_%H%M%S).log"

# Timestamp for this backup run
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_SUBDIR="${BACKUP_DIR}/${TIMESTAMP}"

# =============================================================================
# COLOR OUTPUT
# =============================================================================

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# =============================================================================
# LOGGING FUNCTIONS
# =============================================================================

log_init() {
    mkdir -p "${LOG_DIR}"
    touch "${LOG_FILE}"
    echo "========================================" | tee -a "${LOG_FILE}"
    echo "Backup started at $(date)" | tee -a "${LOG_FILE}"
    echo "========================================" | tee -a "${LOG_FILE}"
}

log_info() {
    local message="[INFO] $(date '+%Y-%m-%d %H:%M:%S') - $1"
    echo -e "${BLUE}${message}${NC}" | tee -a "${LOG_FILE}"
}

log_success() {
    local message="[SUCCESS] $(date '+%Y-%m-%d %H:%M:%S') - $1"
    echo -e "${GREEN}${message}${NC}" | tee -a "${LOG_FILE}"
}

log_warning() {
    local message="[WARNING] $(date '+%Y-%m-%d %H:%M:%S') - $1"
    echo -e "${YELLOW}${message}${NC}" | tee -a "${LOG_FILE}"
}

log_error() {
    local message="[ERROR] $(date '+%Y-%m-%d %H:%M:%S') - $1"
    echo -e "${RED}${message}${NC}" | tee -a "${LOG_FILE}"
}

# =============================================================================
# NOTIFICATION FUNCTION
# =============================================================================

send_notification() {
    local subject="$1"
    local body="$2"
    
    if [[ -n "${NOTIFY_EMAIL}" ]]; then
        if command -v mail &> /dev/null; then
            echo "${body}" | mail -s "${subject}" "${NOTIFY_EMAIL}"
            log_info "Notification sent to ${NOTIFY_EMAIL}"
        else
            log_warning "mail command not available, cannot send notification"
        fi
    fi
}

# =============================================================================
# ERROR HANDLING
# =============================================================================

cleanup() {
    local exit_code=$?
    if [[ ${exit_code} -ne 0 ]]; then
        log_error "Backup failed with exit code ${exit_code}"
        send_notification "Backup FAILED" "Backup failed at $(date). Check log: ${LOG_FILE}"
    fi
    exit ${exit_code}
}

trap cleanup EXIT

# =============================================================================
# DISK SPACE CHECK
# =============================================================================

check_disk_space() {
    log_info "Checking available disk space..."
    
    local available_kb
    available_kb=$(df "${BACKUP_DIR}" | awk 'NR==2 {print $4}')
    local available_mb=$((available_kb / 1024))
    
    log_info "Available disk space: ${available_mb} MB"
    
    if [[ ${available_mb} -lt ${MIN_DISK_SPACE_MB} ]]; then
        log_error "Insufficient disk space. Required: ${MIN_DISK_SPACE_MB} MB, Available: ${available_mb} MB"
        return 1
    fi
    
    log_success "Disk space check passed"
    return 0
}

# =============================================================================
# BACKUP FUNCTIONS
# =============================================================================

backup_files() {
    log_info "Starting file backup..."
    
    local files_backup_dir="${BACKUP_SUBDIR}/files"
    mkdir -p "${files_backup_dir}"
    
    for source in "${BACKUP_SOURCES[@]}"; do
        if [[ -d "${source}" ]]; then
            local archive_name
            archive_name=$(echo "${source}" | tr '/' '_' | sed 's/^_//')
            local archive_path="${files_backup_dir}/${archive_name}.tar.gz"
            
            log_info "Backing up ${source} to ${archive_path}"
            
            if tar -czf "${archive_path}" -C "$(dirname "${source}")" "$(basename "${source}")" 2>/dev/null; then
                local size
                size=$(du -h "${archive_path}" | cut -f1)
                log_success "Backed up ${source} (${size})"
            else
                log_warning "Failed to backup ${source}, skipping..."
            fi
        else
            log_warning "Source directory ${source} does not exist, skipping..."
        fi
    done
    
    log_success "File backup completed"
}

backup_postgresql() {
    if [[ "${POSTGRES_ENABLED}" != "true" ]]; then
        log_info "PostgreSQL backup disabled, skipping..."
        return 0
    fi
    
    log_info "Starting PostgreSQL backup..."
    
    local db_backup_dir="${BACKUP_SUBDIR}/databases/postgresql"
    mkdir -p "${db_backup_dir}"
    
    if ! command -v pg_dump &> /dev/null; then
        log_warning "pg_dump not found, skipping PostgreSQL backup"
        return 0
    fi
    
    local databases
    if [[ -n "${POSTGRES_DATABASES}" ]]; then
        IFS=',' read -ra databases <<< "${POSTGRES_DATABASES}"
    else
        # Get all databases
        databases=($(sudo -u "${POSTGRES_USER}" psql -t -c "SELECT datname FROM pg_database WHERE datistemplate = false;" 2>/dev/null || echo ""))
    fi
    
    for db in "${databases[@]}"; do
        db=$(echo "${db}" | xargs) # Trim whitespace
        if [[ -n "${db}" ]]; then
            local dump_file="${db_backup_dir}/${db}.sql.gz"
            log_info "Dumping PostgreSQL database: ${db}"
            
            if sudo -u "${POSTGRES_USER}" pg_dump "${db}" 2>/dev/null | gzip > "${dump_file}"; then
                local size
                size=$(du -h "${dump_file}" | cut -f1)
                log_success "PostgreSQL database ${db} backed up (${size})"
            else
                log_warning "Failed to backup PostgreSQL database: ${db}"
            fi
        fi
    done
    
    log_success "PostgreSQL backup completed"
}

backup_mysql() {
    if [[ "${MYSQL_ENABLED}" != "true" ]]; then
        log_info "MySQL backup disabled, skipping..."
        return 0
    fi
    
    log_info "Starting MySQL backup..."
    
    local db_backup_dir="${BACKUP_SUBDIR}/databases/mysql"
    mkdir -p "${db_backup_dir}"
    
    if ! command -v mysqldump &> /dev/null; then
        log_warning "mysqldump not found, skipping MySQL backup"
        return 0
    fi
    
    local mysql_opts="-u${MYSQL_USER}"
    if [[ -n "${MYSQL_PASSWORD}" ]]; then
        mysql_opts="${mysql_opts} -p${MYSQL_PASSWORD}"
    fi
    
    local databases
    if [[ -n "${MYSQL_DATABASES}" ]]; then
        IFS=',' read -ra databases <<< "${MYSQL_DATABASES}"
    else
        # Get all databases
        databases=($(mysql ${mysql_opts} -e "SHOW DATABASES;" 2>/dev/null | grep -Ev "(Database|information_schema|performance_schema|mysql|sys)" || echo ""))
    fi
    
    for db in "${databases[@]}"; do
        db=$(echo "${db}" | xargs) # Trim whitespace
        if [[ -n "${db}" ]]; then
            local dump_file="${db_backup_dir}/${db}.sql.gz"
            log_info "Dumping MySQL database: ${db}"
            
            if mysqldump ${mysql_opts} "${db}" 2>/dev/null | gzip > "${dump_file}"; then
                local size
                size=$(du -h "${dump_file}" | cut -f1)
                log_success "MySQL database ${db} backed up (${size})"
            else
                log_warning "Failed to backup MySQL database: ${db}"
            fi
        fi
    done
    
    log_success "MySQL backup completed"
}

# =============================================================================
# ROTATION FUNCTION
# =============================================================================

rotate_backups() {
    log_info "Rotating old backups (keeping last ${BACKUP_RETENTION_DAYS} days)..."
    
    local count=0
    while IFS= read -r -d '' backup_dir; do
        log_info "Removing old backup: ${backup_dir}"
        rm -rf "${backup_dir}"
        ((count++)) || true
    done < <(find "${BACKUP_DIR}" -maxdepth 1 -type d -mtime +${BACKUP_RETENTION_DAYS} -print0 2>/dev/null)
    
    if [[ ${count} -gt 0 ]]; then
        log_success "Removed ${count} old backup(s)"
    else
        log_info "No old backups to remove"
    fi
}

# =============================================================================
# MANIFEST FUNCTION
# =============================================================================

create_manifest() {
    log_info "Creating backup manifest..."
    
    local manifest_file="${BACKUP_SUBDIR}/manifest.txt"
    
    {
        echo "=========================================="
        echo "BACKUP MANIFEST"
        echo "=========================================="
        echo ""
        echo "Backup Date: $(date)"
        echo "Backup Directory: ${BACKUP_SUBDIR}"
        echo "Hostname: $(hostname)"
        echo "User: $(whoami)"
        echo ""
        echo "=========================================="
        echo "BACKED UP SOURCES"
        echo "=========================================="
        for source in "${BACKUP_SOURCES[@]}"; do
            echo "  - ${source}"
        done
        echo ""
        echo "=========================================="
        echo "DATABASE BACKUPS"
        echo "=========================================="
        echo "  PostgreSQL Enabled: ${POSTGRES_ENABLED}"
        echo "  MySQL Enabled: ${MYSQL_ENABLED}"
        echo ""
        echo "=========================================="
        echo "BACKUP CONTENTS"
        echo "=========================================="
        find "${BACKUP_SUBDIR}" -type f -exec ls -lh {} \; 2>/dev/null
        echo ""
        echo "=========================================="
        echo "TOTAL SIZE"
        echo "=========================================="
        du -sh "${BACKUP_SUBDIR}" 2>/dev/null || echo "Unable to calculate size"
        echo ""
        echo "=========================================="
        echo "CHECKSUMS (SHA256)"
        echo "=========================================="
        find "${BACKUP_SUBDIR}" -type f -name "*.gz" -exec sha256sum {} \; 2>/dev/null
    } > "${manifest_file}"
    
    log_success "Manifest created: ${manifest_file}"
}

# =============================================================================
# MAIN FUNCTION
# =============================================================================

main() {
    # Initialize logging
    log_init
    
    log_info "Backup configuration:"
    log_info "  Backup directory: ${BACKUP_DIR}"
    log_info "  Retention days: ${BACKUP_RETENTION_DAYS}"
    log_info "  Sources: ${BACKUP_SOURCES[*]}"
    
    # Create backup directory
    mkdir -p "${BACKUP_SUBDIR}"
    log_info "Created backup directory: ${BACKUP_SUBDIR}"
    
    # Check disk space
    check_disk_space
    
    # Perform backups
    backup_files
    backup_postgresql
    backup_mysql
    
    # Create manifest
    create_manifest
    
    # Rotate old backups
    rotate_backups
    
    # Calculate total backup size
    local total_size
    total_size=$(du -sh "${BACKUP_SUBDIR}" 2>/dev/null | cut -f1)
    
    echo "========================================" | tee -a "${LOG_FILE}"
    log_success "Backup completed successfully!"
    log_info "Total backup size: ${total_size}"
    log_info "Backup location: ${BACKUP_SUBDIR}"
    log_info "Log file: ${LOG_FILE}"
    echo "========================================" | tee -a "${LOG_FILE}"
    
    # Send success notification
    send_notification "Backup SUCCESS" "Backup completed successfully at $(date). Size: ${total_size}. Location: ${BACKUP_SUBDIR}"
}

# Run main function
main "$@"
