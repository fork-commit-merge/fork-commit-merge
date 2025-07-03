#!/bin/bash

# Bash - Medium

# Disk Monitor script that shows disk usage and warns if usage is high

echo "=== Disk Usage Monitor ==="
echo "Date: $(date)"
echo ""

# Get disk usage information
df -h | grep -E '^/dev/' | while read line; do
    filesystem=$(echo $line | awk '{print $1}')
    usage=$(echo $line | awk '{print $5}' | sed 's/%//')
    mount_point=$(echo $line | awk '{print $6}')
    
    echo "Filesystem: $filesystem"
    echo "Mount point: $mount_point"
    echo "Usage: $usage%"
    
    # Check if usage is above 80%
    if [ "$usage" -gt 80 ]; then
        echo "⚠️  WARNING: High disk usage detected!"
    fi
    
    echo "---"
done

echo "Disk monitoring completed."
