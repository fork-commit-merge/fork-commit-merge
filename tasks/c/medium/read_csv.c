#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE_LENGTH 1024

int main() {
    // Open the CSV file for reading
    FILE *file = fopen("data.csv", "r");
    if (file == NULL) {
        perror("Error opening file");
        return 1;
    }

    // Read the header line
    char header[MAX_LINE_LENGTH];
    if (fgets(header, sizeof(header), file) == NULL) {
        perror("Error reading header");
        fclose(file);
        return 1;
    }

    // Print the header
    printf("Header: %s\n", header);

    // Read and display each line
    char line[MAX_LINE_LENGTH];
    while (fgets(line, sizeof(line), file) != NULL) {
        // Tokenize the line to extract individual fields
        char *token = strtok(line, ",");
        printf("\nReading line: %s", line);

        // Display each field
        while (token != NULL) {
            printf("%s: %s\n", strtok(token, "\n"), strtok(NULL, ","));
            token = strtok(NULL, ",");
        }
    }

    // Close the file
    fclose(file);

    return 0;
}
