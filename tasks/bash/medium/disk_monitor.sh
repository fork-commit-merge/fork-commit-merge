#!/bin/bash

# Bash - Medium

# TODO: Implement the Disk Monitor script

threshold=10

max_usage=$(df --output=pcent / | awk 'NR>1 {print $1}' | sed 's/%//' \
  | sort -nr | head -1)

if [ "$max_usage" -gt "$threshold" ]; then
  echo "Максимальное использование диска: ${max_usage}%"
  df -h / | mail -s "Максимальное использование диска: ${max_usage}%"\
    otetzalexandr1986@gmail.com
fi
