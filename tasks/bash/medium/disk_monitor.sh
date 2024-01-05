#!/bin/bash

# Bash - Medium

# TODO: Implement the Disk Monitor script

# Get disk space information
disk_info=$(df -h)

# Print the information
echo "Disk Space Information:"
echo "$disk_info"
