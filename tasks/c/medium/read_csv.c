// C - Medium

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define BUFFER_SIZE 512

int main() {
FILE *fp = fopen("data.csv", "r");
    if (!fp) {
        printf("Could not open file.\n");
        return 1;
    }

    char buffer[BUFFER_SIZE];
    if (fgets(buffer, BUFFER_SIZE, fp)) {
        buffer[strcspn(buffer, "\r\n")] = 0;
        printf("Header: %s\n", buffer);
    }

    while (fgets(buffer, BUFFER_SIZE, fp)) {
        buffer[strcspn(buffer, "\r\n")] = 0;
        printf("\nReading line: %s\n", buffer);

        char *name = strtok(buffer, ",");
        char *age = strtok(NULL, ",");

        if (name && age) {
            printf("Name: %s\n", name);
            printf("Age: %s\n", age);
        }
    }

    fclose(fp);
    return 0;
}
