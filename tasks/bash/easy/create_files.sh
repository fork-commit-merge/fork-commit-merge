#!/bin/bash

# Bash - Easy

# TODO: Write the Bash script requested in the issue description
cd ../../..
mkdir -p files

for i in $(seq 1 3);
do
    echo "Hello Shell!" > files/file$i.txt
    cat files/file$i.txt
done
