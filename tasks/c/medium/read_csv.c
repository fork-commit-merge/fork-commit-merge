// C - Medium

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    // TODO: Implement the program that reads and displays the contents of data.csv file
    char filename[]="data.csv";
    FILE *file=fopen(filename,"r");
    if (file == NULL) {
        perror("Error opening file");
        return 1;
    }
    char line[1024];
    while (fgets(line, sizeof(line), file)) {
        // Tokenize the line using a comma as the delimiter
        char *token = strtok(line, ",");
        while (token != NULL) {
            // Print each token (field) with appropriate formatting
            printf("%-15s", token); // Adjust the field width as needed
            token = strtok(NULL, ",");
        }
        printf("\n"); // Newline after processing one line
    }

    fclose(file);
    return 0;
}
