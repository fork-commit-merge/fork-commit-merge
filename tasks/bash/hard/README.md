# Bash - Hard Task

## Automated Backup Script with Rotation

This task requires implementing a comprehensive backup script that handles file and database backups with automatic rotation and error handling.

### Requirements:

1. **File Backup**: Backup multiple directories (/etc, /home, /var/www)
2. **Database Backup**: Support PostgreSQL and MySQL databases
3. **Compression**: Compress archives using tar and gzip
4. **Rotation**: Automatically remove old backups (keep last 7)
5. **Logging**: Comprehensive logging of all operations
6. **Disk Space Check**: Verify sufficient space before backup
7. **Error Handling**: Robust error handling with notifications
8. **Manifest**: Create backup manifest with details

### Features:

- **Error Handling**: Uses `set -euo pipefail` for strict error handling
- **Logging**: All operations logged to file and console
- **Notifications**: Email notifications on backup failures
- **Space Management**: Checks available disk space before backup
- **Rotation**: Automatic cleanup of old backups
- **Manifest**: Creates detailed backup manifest
- **Color Output**: Colored console output for better UX

### Files:
- `backup_script.sh` - Main backup script
- `README.md` - This file

### Expected Outcome:
A production-ready backup script that can be scheduled with cron for automated backups. 
