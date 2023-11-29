// C - Medium

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE_SIZE 100

int main() {
    // TODO: Implement the program that reads and displays the contents of data.csv file
    FILE *file = fopen("data.csv", "r");

    if (file == NULL) {
        perror("Error opening file");
        return 1; 
    }
    char line[MAX_LINE_SIZE];
    while (fgets(line, sizeof(line), file) != NULL) {
        printf("%s", line);
    }
    fclose(file);

    return 0;
}
