#!/bin/bash

# Bash - Easy
# Script to create files directory and three text files with content

# Create the files directory if it doesn't exist
mkdir -p files

# Navigate into the files directory
cd files

# Create three files and write "Hello Shell!" to each
echo "Hello Shell!" > file1.txt
echo "Hello Shell!" > file2.txt
echo "Hello Shell!" > file3.txt

# Print the contents of each file to the console
echo "Contents of file1.txt:"
cat file1.txt

echo "Contents of file2.txt:"
cat file2.txt

echo "Contents of file3.txt:"
cat file3.txt
