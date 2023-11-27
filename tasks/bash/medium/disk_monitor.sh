#!/bin/bash

# Configuration
THRESHOLD=20  # Set the threshold as 20% (can be changed)
EMAIL="your_email@example.com"  # Replace with the email address where alerts should be sent

# Function to check disk space and send email if needed
check_disk_space() {
    # Using 'df' command to get the root filesystem disk usage and extracting the usage percentage
    usage=$(df -h / | grep -v Filesystem | awk '{print $5}' | sed 's/%//g')

    # Check if usage exceeds threshold
    if [ $usage -ge $THRESHOLD ]; then
        # Preparing the disk space report
        report=$(df -h /)

        # Sending the email alert
        echo -e "Subject: Disk Space Alert\n\nDisk space is critically low on the server. Current status:\n\n$report" | mail -s "Disk Space Alert" $EMAIL
    fi
}

# Run the check
check_disk_space

