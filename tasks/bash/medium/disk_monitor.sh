#!/bin/bash

THRESHOLD=20
HOSTNAME=$(hostname)
TMP_FILE="/tmp/disk_space_report.txt"

send_alert() {
    local subject="$1"
    local email="$2"
    local content="$3"

    echo "Email (subject: '$subject') would be sent to $email with the following content:"
    echo ""
    echo "$content"
    echo "----------------------------------------"
}

check_disk_space() {
    df -h --output=source,pcent,size,used,avail,target | tail -n +2 | while read -r line; do
        PARTITION=$(echo "$line" | awk '{print $1}')
        PERCENT_USED=$(echo "$line" | awk '{print $2}' | tr -d '%')
        
        if [ "$PERCENT_USED" -ge $((100 - THRESHOLD)) ]; then
            ALERT_MESSAGE="Disk Space Warning on $HOSTNAME

The following partition is critically low on space:

$line

Full disk usage report:

$(df -h)

Please take action immediately to free up space or extend the partition."
            
            send_alert "Disk Space Alert on $HOSTNAME" "email@example.com" "$ALERT_MESSAGE"
            break
        fi
    done
}

check_disk_space
