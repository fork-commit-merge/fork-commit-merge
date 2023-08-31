// C - Medium

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    FILE* f = fopen("data.csv", "r");
    char word[128];
    char name[128];
    int age;
    char ageChar[128];
    int i = 0;
    while ((fscanf(f, "%s\n", word)) != EOF) {
        if (i == 0) {
            printf("Header: %s\n", word);
            i++;
            continue;
        }
        printf("\n");
        memset(name, 0, strlen(name));
        memset(ageChar, 0, strlen(ageChar));
        printf("Reading line: %s\n", word);
        int comma;   // Find comma
        for (comma = strlen(word) - 1; word[comma] != ','; comma--);
        strncpy(name, word, comma); // Get name
        printf("Name: %s\n", name);
        int index = 0;
        // Get age
        for (comma = comma + 1; comma < strlen(word); comma++) {
            ageChar[index] = word[comma];
            index++;
        }
        ageChar[index] = '\0';
        printf("Age: %s\n", ageChar);
    }
    fclose(f);
    return 0;
}
