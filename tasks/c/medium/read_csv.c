#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE_LENGTH 1024
#define MAX_FIELD_LENGTH 256

int main() {
    FILE *file = fopen("data.csv", "r");
    if (file == NULL) {
        fprintf(stderr, "Error opening file.\n");
        return 1;
    }

    // Read and print header
    char header[MAX_LINE_LENGTH];
    fgets(header, sizeof(header), file);
    printf("Header: %s", header);

    // Read and print content
    char line[MAX_LINE_LENGTH];
    while (fgets(line, sizeof(line), file)) {
        // Tokenize line
        char *name = strtok(line, ",");
        char *age = strtok(NULL, ",");

        // Print content in a human-readable format
        printf("\nReading line: %s", line);
        printf("Name: %s\n", name);
        printf("Age: %s\n", age);
    }

    fclose(file);
    return 0;
}
