#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void readCSV();
void writeCSV();

int main() {
    writeCSV();

    readCSV();

    return 0;
}
void readCSV() {
    FILE *file = fopen("data.csv", "r");
    if (file == NULL) {
        perror("Error opening the file");
        return;
    }

    printf("Name\tAge\n");

    char line[100];
    while (fgets(line, sizeof(line), file)) {
        char *name = strtok(line, ",");
        char *age = strtok(NULL, ",");
        
        if (name != NULL && age != NULL) {
            printf("%s\t%s\n", name, age);
        }
    }

    fclose(file);
}

void writeCSV() {
    FILE *file = fopen("data.csv", "w");
    if (file == NULL) {
        perror("Error opening the file");
        return;
    }

    fprintf(file, "Name,Age\n");

    fprintf(file, "Alice,30\n");
    fprintf(file, "Bob,40\n");
    fprintf(file, "Charlie,50\n");

    fclose(file);
}

