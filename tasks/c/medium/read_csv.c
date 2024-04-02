// C - Medium

#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main() {
//    TODO: Implement the program requested in the task description
    FILE *file = fopen("data.csv", "r");
    if (file == NULL) {
        printf("Fail to open file.\n");
        return 1;
    }

    char line[1000];
    if (fgets(line, sizeof(line), file)) {
        printf("Header: %s", line);
    } else {
        printf("Fail to read the header.\n");
        fclose(file);
        return 1;
    }

    while (fgets(line, sizeof(line), file)) {
        char *token;
        token = strtok(line, ",");
        if (token != NULL) {
            printf("Reading line: %s", line);
            printf("Name: %s\n", strtok(token, "\n"));
            token = strtok(NULL, ",");
            if (token != NULL) {
                printf("Age: %s\n\n", strtok(token, "\n"));
            }
        }
    }

    fclose(file);
    return 0;
}
