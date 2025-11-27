// C - Medium

#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main() {
}
    FILE *file = fopen("data.csv", "r");
    if (file == NULL) {
        printf("Error: Could not open file.\n");
        return 1;
    }

    char line[256];
    while (fgets(line, sizeof(line), file)) {
        printf("Reading line: %s", line);
        
        // Remove trailing newline
        line[strcspn(line, "\n")] = 0;
        
        // Tokenize the line
        char *token = strtok(line, ",");
        if (token != NULL) {
            printf("Name: %s ", token);
            token = strtok(NULL, ",");
            if (token != NULL) {
                printf("Age: %s", token);
            }
        }
        printf("\n");
    }

    fclose(file);
    return 0;
