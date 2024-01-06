// C - Medium

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void main() {
    FILE *data;
    data  = fopen("data.csv", "r");
    if (data == NULL) {
        printf("Error while opening the file or File doesn't exists\n");
    }

    char text[100];
    while (fgets(text, sizeof(text), data)) {
        printf("%s", text);
    }

    fclose(data);
}
