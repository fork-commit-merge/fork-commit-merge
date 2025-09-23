#!/bin/bash

# Bash - Medium

# TODO: Implement the Disk Monitor script


# Configuration
THRESHOLD=80
LOG_FILE="/var/log/disk_monitor.log"
EMAIL="admin@example.com"

# Get disk usage for root partition
USAGE=$(df / | awk 'NR==2{print $5}' | sed 's/%//)


# Log current usage
echo "$(date '+%Y-%m-%d %H:%M:%S') - Disk usage: ${USAGE}%" >> "$LOG_FILE"

# check threshold and alert
if (( USAGE > THRESHOLD )); then
echo "Disk usage is critical: ${USAGE}%" | mail -s "Disk Alert" "$EMAIL"
echo "$(date '+%Y-%m-%d %H:%M:%S') - ALERT sent $EMAIL" >> "$LOG_FILE"
fi