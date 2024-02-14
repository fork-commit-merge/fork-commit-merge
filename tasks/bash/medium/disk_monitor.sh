#!/bin/bash

# Bash - Medium

# TODO: Implement the Disk Monitor script
# Function to check the disk usage and send an alert if the usage exceeds the threshold
check_disk_usage() {
    local threshold=90
    local alert_recipient="admin@example.com"

    for partition in $(df -H | grep -vE '^Filesystem|tmpfs|cdrom' | awk '{ print $5 " " $1 }'); do
        usage=$(echo $partition | awk '{ print $1}' | cut -d'%' -f1  )
        partition_name=$(echo $partition | awk '{ print $2 }' )
        if [ $usage -ge $threshold ]; then
            echo "Disk space critically low on $partition_name ($usage%)"
            # Send email alert
            echo "Disk space critically low on $partition_name ($usage%)" | mail -s "Disk space alert: $partition_name at ${usage}%" $alert_recipient
        fi
    done
}

# Main loop that runs the check every 5 minutes
while true; do
    check_disk_usage
    sleep 300 # sleep for 5 minutes
done
