#!/bin/bash

cd ~/fork-commit-merge/tasks/bash/easy/
touch file1.txt file2.txt file3.txt
printf "Hello Shell!\n" > file1.txt
printf "Hello Shell!\n" > file2.txt
printf "Hello Shell!\n" > file3.txt
cat file1.txt file2.txt file3.txt
