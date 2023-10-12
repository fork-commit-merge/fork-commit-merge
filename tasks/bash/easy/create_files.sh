#!/bin/bash

# Bash - Easy

# TODO: Write the Bash script requested in the issue description
cd tasks/bash/easy
 for i in {1..3}; do touch file$i.txt; done
for i in {1..3}; do echo 'Hello Shell' > file$i.txt; done
 for i in {1..3}; do cat file$i.txt; done

