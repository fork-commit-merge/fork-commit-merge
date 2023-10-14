#!/bin/bash

# Bash - Medium

# TODO: Implement the Disk Monitor script
#!/bin/bash

threshold=20


disk_space=$(df --output=pcent / | tail -n 1)
disk_space=${disk_space%\%*} 

if ((disk_space < threshold)); then
   
    recipient="email@example.com"
    subject="Low Disk Space Alert on $(hostname)"
    message="Available disk space is ${disk_space}%, which is below the threshold of ${threshold}%."

    echo "$message" | mail -s "$subject" "$recipient"
fi
