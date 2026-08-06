#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char names[][20] = {"Alice", "Bob", "Charlie"};
    int ages[] = {30, 40, 50};

    int n = 3;

    printf("Name\tAge\n");

    for (int i = 0; i < n; i++)
    {
        printf("%s\t%d\n", names[i], ages[i]);
    }

    return 0;
}
