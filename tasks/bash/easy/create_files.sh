#!/bin/bash

# Bash - Easy

# TODO: Write the Bash script requested in the issue description

# Navigate into the "files" directory
cd files || { echo "Directory 'files' not found!"; exit 1; }

# Create three files and write "Hello Shell!" into each
for i in 1 2 3; do
  echo "Hello Shell!" > "file$i.txt"
done

# Print contents of each file to the console
for i in 1 2 3; do
  echo "Contents of file$i.txt:"
  cat "file$i.txt"
  echo "---------------------"
done