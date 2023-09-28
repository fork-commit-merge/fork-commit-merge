#!/bin/bash

# Bash - Medium

# TODO: Implement the Disk Monitor script#!/bin/bash

# Configure your threshold for low disk space (in percentage)
threshold=20

# Email settings
recipient="mihirkohli2001@gmail.com"
subject="Low Disk Space Alert"

# Get disk space information using df and filter the root directory (/)
disk_info=$(df -h /)

# Extract the available disk space percentage
disk_space_percentage=$(echo "$disk_info" | awk 'NR==2 {print $5}' | cut -d'%' -f1)

# Check if the available disk space is below the threshold
if [ "$disk_space_percentage" -lt "$threshold" ]; then
    # Compose the email message
    message="Low disk space alert on $(hostname)\n\n$disk_info"

    # Send the email using the mail command
    echo -e "$message" | mail -s "$subject" "$recipient"

    # Print a message to the terminal for confirmation
    echo "Low disk space detected. Email alert sent to $recipient."
else
    # If disk space is not below the threshold, print a message to the terminal
    echo "Disk space is above the threshold. No action taken."
fi

