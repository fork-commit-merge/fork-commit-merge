#!/bin/bash

# Set the threshold for low disk space (in percentage)
THRESHOLD=20

# Set the recipient email address
RECIPIENT_EMAIL="<YOUR_EMAIL>"

# Get disk space information using df command
DISK_SPACE=$(df -h /)

# Extract the percentage of available space
AVAIL_PERCENTAGE=$(echo "$DISK_SPACE" | awk 'NR==2 {print $(NF-1)}' | sed 's/%//')

# Check if available space is below the threshold
if [ "$AVAIL_PERCENTAGE" -lt "$THRESHOLD" ]; then
    # Compose the email message
    SUBJECT="Low Disk Space Alert"
    MESSAGE="Disk space is running low on the system.\n\nDisk Space Information:\n$DISK_SPACE"

    # Send email using mail command
    echo -e "$MESSAGE" | mail -s "$SUBJECT" "$RECIPIENT_EMAIL"

    echo "Email alert sent. Disk space is below $THRESHOLD%."
else
    echo "Disk space is above $THRESHOLD%. No action required."
fi
