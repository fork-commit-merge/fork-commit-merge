#!/bin/bash

# Bash - Easy

mkdir -p files
cd files

for i in 1 2 3; do
    echo "Hello Shell!" > "file$i.txt"
    cat "file$i.txt"
done
