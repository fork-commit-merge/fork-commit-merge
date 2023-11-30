#!/bin/bash

cd tasks/bash/easy/files || exit

# Create three files named file1.txt, file2.txt, and file3.txt and write "Hello Shell!" to each
echo "Hello Shell!" > file1.txt
echo "Hello Shell!" > file2.txt
echo "Hello Shell!" > file3.txt

echo "Contents of file1.txt:"
cat file1.txt

echo "Contents of file2.txt:"
cat file2.txt

echo "Contents of file3.txt:"
cat file3.txt
