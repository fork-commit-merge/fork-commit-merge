#!/bin/bash

# Bash - Hard

# TODO: Implement an automated backup script with rotation
# Requirements:
# 1. Backup files and databases
# 2. Compress archives
# 3. Rotate old backups
# 4. Log all operations
# 5. Check available disk space
# 6. Send notifications on errors
# 7. Support multiple backup sources

set -euo pipefail

# Configuration
BACKUP_DIR="/var/backups"
LOG_FILE="/var/log/backup.log"
MAX_BACKUPS=7
MIN_DISK_SPACE=10  # GB
NOTIFICATION_EMAIL="admin@example.com"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

# Error handling
error_exit() {
    log "ERROR: $1"
    echo -e "${RED}ERROR: $1${NC}"
    # Send notification email
    echo "Backup failed: $1" | mail -s "Backup Error" "$NOTIFICATION_EMAIL" 2>/dev/null || true
    exit 1
}

# Check disk space
check_disk_space() {
    local available_space=$(df -BG "$BACKUP_DIR" | awk 'NR==2 {print $4}' | sed 's/G//')
    if [ "$available_space" -lt "$MIN_DISK_SPACE" ]; then
        error_exit "Insufficient disk space. Available: ${available_space}G, Required: ${MIN_DISK_SPACE}G"
    fi
    log "Disk space check passed. Available: ${available_space}G"
}

# Create backup directory
create_backup_dir() {
    local timestamp=$(date '+%Y%m%d_%H%M%S')
    local backup_path="$BACKUP_DIR/backup_$timestamp"
    mkdir -p "$backup_path"
    echo "$backup_path"
}

# Backup files
backup_files() {
    local backup_path="$1"
    local source_dirs=("/etc" "/home" "/var/www")
    
    log "Starting file backup..."
    for dir in "${source_dirs[@]}"; do
        if [ -d "$dir" ]; then
            local dir_name=$(basename "$dir")
            log "Backing up $dir..."
            tar -czf "$backup_path/${dir_name}.tar.gz" -C "$(dirname "$dir")" "$(basename "$dir")" 2>/dev/null || {
                log "Warning: Failed to backup $dir"
            }
        fi
    done
}

# Backup database
backup_database() {
    local backup_path="$1"
    
    log "Starting database backup..."
    
    # PostgreSQL backup
    if command -v pg_dump >/dev/null 2>&1; then
        log "Backing up PostgreSQL database..."
        pg_dump -U postgres -h localhost myapp > "$backup_path/database.sql" 2>/dev/null || {
            log "Warning: Failed to backup PostgreSQL database"
        }
    fi
    
    # MySQL backup
    if command -v mysqldump >/dev/null 2>&1; then
        log "Backing up MySQL database..."
        mysqldump -u root -p myapp > "$backup_path/mysql_database.sql" 2>/dev/null || {
            log "Warning: Failed to backup MySQL database"
        }
    fi
}

# Rotate old backups
rotate_backups() {
    log "Rotating old backups..."
    local backup_count=$(find "$BACKUP_DIR" -maxdepth 1 -name "backup_*" -type d | wc -l)
    
    if [ "$backup_count" -gt "$MAX_BACKUPS" ]; then
        local to_delete=$((backup_count - MAX_BACKUPS))
        log "Removing $to_delete old backup(s)..."
        
        find "$BACKUP_DIR" -maxdepth 1 -name "backup_*" -type d -printf '%T@ %p\n' | \
        sort -n | head -n "$to_delete" | cut -d' ' -f2- | \
        while read -r dir; do
            log "Removing old backup: $dir"
            rm -rf "$dir"
        done
    fi
}

# Create backup manifest
create_manifest() {
    local backup_path="$1"
    local manifest_file="$backup_path/manifest.txt"
    
    {
        echo "Backup created: $(date)"
        echo "Backup location: $backup_path"
        echo "Files included:"
        find "$backup_path" -name "*.tar.gz" -o -name "*.sql" | sort
        echo ""
        echo "Backup size: $(du -sh "$backup_path" | cut -f1)"
    } > "$manifest_file"
}

# Main backup function
main() {
    log "Starting backup process..."
    
    # Check disk space
    check_disk_space
    
    # Create backup directory
    local backup_path=$(create_backup_dir)
    log "Created backup directory: $backup_path"
    
    # Perform backups
    backup_files "$backup_path"
    backup_database "$backup_path"
    
    # Create manifest
    create_manifest "$backup_path"
    
    # Rotate old backups
    rotate_backups
    
    log "Backup completed successfully: $backup_path"
    echo -e "${GREEN}Backup completed successfully!${NC}"
}

# Run main function
main "$@" 