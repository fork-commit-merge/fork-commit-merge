// C - Medium

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE 1024

int main(void) {
    FILE *file = fopen("data.csv", "r");
    if (file == NULL) {
        fprintf(stderr, "Error: could not open data.csv\n");
        return 1;
    }

    char line[MAX_LINE];
    int isHeader = 1;
    int firstRecord = 1;

    while (fgets(line, sizeof(line), file) != NULL) {
        // Strip the trailing newline characters left by fgets().
        size_t len = strlen(line);
        while (len > 0 && (line[len - 1] == '\n' || line[len - 1] == '\r')) {
            line[--len] = '\0';
        }

        // Skip blank lines.
        if (len == 0) {
            continue;
        }

        // The first non-empty line is the header row.
        if (isHeader) {
            printf("Header: %s\n\n", line);
            isHeader = 0;
            continue;
        }

        // Separate each record with a blank line.
        if (!firstRecord) {
            printf("\n");
        }
        printf("Reading line: %s\n", line);

        // Tokenize the comma-separated fields.
        char *name = strtok(line, ",");
        char *age = strtok(NULL, ",");

        if (name != NULL) {
            printf("Name: %s\n", name);
        }
        if (age != NULL) {
            printf("Age: %s\n", age);
        }

        firstRecord = 0;
    }

    fclose(file);
    return 0;
}
