// C - Medium

#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main() {
    FILE *file = fopen("data.csv", "r");

    if (file == NULL) {
        printf("Error opening file.\n");
        return 1;
    }   

    char line[100];

    if (fgets(line, sizeof(line), file)) {
        line[strcspn(line, "\n")] = '\0';
        printf("Header: %s\n\n", line);

    }   

    while (fgets(line, sizeof(line), file)) {

        line[strcspn(line, "\n")] = '\0';

        printf("Reading line: %s\n", line);

        char *name = strtok(line, ",");
        char *age = strtok(NULL, ",");

        printf("Name: %s\n", name);
        printf("Age: %s\n\n", age);

    }

        fclose(file);
        return 0;

}