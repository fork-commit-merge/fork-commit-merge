#!/bin/sh
# Disk space monitor will send an email alert to ADMIN
ALERT=20 # alert level
ADMIN="lamb2111933@student.ctu.edu.vn"
echo "Disk space used:"
df -H | grep -vE '^Filesystem|tmpfs|cdrom' | awk '{ print $1 "\t" $5 }' | while read -r output;
do
  echo "$output"
  total=100
  used=$(echo "$output" | awk '{ print $2}' | cut -d'%' -f1 )
  left=$(($total - $used))
  partition=$(echo "$output" | awk '{ print $1 }' )
  if [ $left -lt $ALERT ];
    then
      echo "Running out of space \"$partition ($used% used)\" on $(hostname) as on $(LANG=en_us_88591; date)" |
      mail -s "[Lubuntu-virtualbox] Alert: $partition has $left%  of disk space left!" "$ADMIN"
  fi
done
