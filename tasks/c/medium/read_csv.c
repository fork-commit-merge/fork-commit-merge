#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE_LENGTH 100

int main() {
    // Open the data.csv file for reading
    FILE *file = fopen("data.csv", "r");

    // Check if the file opened successfully
    if (file == NULL) {
        fprintf(stderr, "Error opening the file.\n");
        return 1;
    }

    char line[MAX_LINE_LENGTH];

    // Read and display each line from the file
    while (fgets(line, MAX_LINE_LENGTH, file) != NULL) {
        // Print the line
        printf("%s", line);
    }

    // Close the file
    fclose(file);
