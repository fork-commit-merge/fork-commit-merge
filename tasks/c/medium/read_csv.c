// C - Medium

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define LINE_SIZE 256

int main()
{
    //    TODO: Implement the program requested in the task description
    FILE *file = fopen("data.csv", "r");
    if (!file)
    {
        perror("Error opening file");
        return 1;
    }

    char line[LINE_SIZE];

    // skip header
    if (fgets(line, sizeof(line), file) == NULL)
    {
        printf("Empty file.\n");
        fclose(file);
        return 1;
    }
    printf("Name\tAGe\n");
    printf("----\t----\n");

    // Read each line
    while (fgets(line, sizeof(line), file))
    {
        char *name = strtok(line, ",");
        char *ageStr = strtok(NULL, ",");

        if (name && ageStr)
        {

            // Remove newline from age if present
            ageStr[strcspn(ageStr, "\r\n")] = '\0';
            printf("%s\%ts\n", name, ageStr);
        }
    }

    fclose(file);
    return 0;
}
