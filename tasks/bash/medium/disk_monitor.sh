#!/bin/bash

# Bash - Medium

# TODO: Implement the Disk Monitor script

if [ $# -gt 0 ]; then
    THRESHOLD=$1
else
    echo -e "Usage:\nrun ./disk_monitor.sh 20 to check if threshold for low disk space is below 20%"
    exit 0
fi

FREESPACE=$(df -Ph | tail -1 | awk '{print $5}' | cut -d'%' -f1)
if [ $FREESPACE -lt $THRESHOLD ]; then
    mail -s "DISKSPACE LOW" "me@mail"
fi
