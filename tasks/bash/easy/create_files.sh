#!/bin/bash

# Bash - Easy

# TODO: Write the Bash script requested in the issue description
#!/bin/bash

# Navigate into the "files" directory
cd tasks/bash/easy/files || exit

# Create three files
touch file1.txt file2.txt file3.txt

# Write "Hello Shell!" to each file
echo "Hello Shell!" > file1.txt
echo "Hello Shell!" > file2.txt
echo "Hello Shell!" > file3.txt

# Print the contents of each file
echo "Contents of file1.txt:"
cat file1.txt

echo "Contents of file2.txt:"
cat file2.txt

echo "Contents of file3.txt:"
cat file3.txt
