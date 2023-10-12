#!/bin/bash

# Bash - Easy
#
# TODO: Write the Bash script requested in the issue description
for i in 1 2 3; do

name="file${i}.txt"
message="hello Shell!"

echo "$message" > "$name"
cat "$name"
done
