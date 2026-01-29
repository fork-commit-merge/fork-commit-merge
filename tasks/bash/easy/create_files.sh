#!/bin/bash

# Bash - Easy

# TODO: Write the Bash script requested in the issue description


# Navigate to the target directory
mkdir -p files
cd files

# Create files and add content using a loop
for i in {1..3}
do
    filename="file$i.txt"
    echo "Hello Shell!" > "$filename"
    
    # Print the content to the console as requested
    echo "Contents of $filename:"
    cat "$filename"
    echo "----------------"
done
