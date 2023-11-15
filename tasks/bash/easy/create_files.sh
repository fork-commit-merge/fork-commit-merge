#!/bin/bash

# Bash - Easy

# TODO: Write the Bash script requested in the issue description
#!/bin/bash

# Bash - Easy

# TODO: Write the Bash script requested in the issue description
#!/bin/bash

# Define the target directory
target_dir="files"

# Check if the target directory exists
if [ ! -d "$target_dir" ]; then
    # If it does not exist, create the directory
    echo "'$target_dir' does not exist. Creating the directory."
    mkdir -p "$target_dir"
fi

# Navigate into the directory
cd "$target_dir"

# Check if directory change was successful
if [ $? -ne 0 ]; then
    echo "Failed to change directory. Exiting script."
    exit 1
fi

# Creating three files and writing "Hello Shell!" to each of them
echo "Hello Shell!" > file1.txt
echo "Hello Shell!" > file2.txt
echo "Hello Shell!" > file3.txt

# Checking if files are created successfully
if [ $? -ne 0 ]; then
    echo "Failed to create and write to files. Exiting script."
    exit 1
fi

# Printing the contents of each file to the console
echo "Contents of file1.txt:"
cat file1.txt

echo "Contents of file2.txt:"
cat file2.txt

echo "Contents of file3.txt:"
cat file3.txt
