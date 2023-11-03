// C - Medium

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE_LENGTH 1024
#define MAX_FIELD_LENGTH 256

int main()
{
    FILE *csv_file = fopen("data.csv", "r"); // Change "data.csv" to your CSV file's name
    if (csv_file == NULL)
    {
        perror("Error opening the CSV file");
        return 1;
    }

    char line[MAX_LINE_LENGTH];
    char *token;

    // Read and print the header
    if (fgets(line, sizeof(line), csv_file) != NULL)
    {
        printf("Header: %s", line);
    }

    // Read and print each data line
    while (fgets(line, sizeof(line), csv_file) != NULL)
    {
        printf("Reading line: %s", line);

        // Tokenize the line using ',' as the delimiter
        token = strtok(line, ",");
        while (token != NULL)
        {
            char field[MAX_FIELD_LENGTH];
            strncpy(field, token, sizeof(field));
            printf("%s: %s\n", (token == line) ? "Name" : "Age", field);
            token = strtok(NULL, ",");
        }
    }

    fclose(csv_file);
    return 0;
}
