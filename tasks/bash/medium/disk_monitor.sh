#!/bin/bash

# Bash - Medium

#!/bin/bash

threshold=20 # Percentage threshold for low disk space 
email="alerts@example.com"

# Get disk usage
df -h | grep -vE '^Filesystem|tmpfs|cdrom' | awk '{ print $5 " " $1 }' > disk_usage.txt

# Now Checking if usage exceeds threshold
while read usage mount; do
  use=$(echo $usage | sed 's/%//g')
  if [ $use -ge $threshold ]; then
    echo "Disk usage on $mount has exceeded $threshold%" 
  fi
done < disk_usage.txt

# Then if any disks exceeded threshold, send email alert
if [ $? -eq 0 ]; then
  echo "Disk space alert" | mail -s "Disk Space Alert" $email
fi