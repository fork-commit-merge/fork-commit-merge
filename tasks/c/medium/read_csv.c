// C - Medium

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE_SIZE 1024
#define DELIMITER ","

int main() {
    // TODO: Implement the program that reads and displays the contents of data.csv file
    FILE *file = fopen("data.csv", "r");
    if (!file) {
        perror("Error opening file");
        return 1;
    }

    char line[MAX_LINE_SIZE];

    // Read and print the header
    if (fgets(line, sizeof(line), file)) {
        printf("Header: %s", line);
    }

    // Read the file line by line (skipping the header)
    while (fgets(line, sizeof(line), file)) {
        printf("\nReading line: %s", line);

        char *token = strtok(line, DELIMITER);

        // Print the content in a human-readable format
        while (token != NULL) {
            printf("Name: %s \nAge: %s", strtok(token, "\n"), strtok(NULL, DELIMITER));
            token = strtok(NULL, DELIMITER);
        }
        
        printf("\n");
    }

    fclose(file);

    return 0;
}
