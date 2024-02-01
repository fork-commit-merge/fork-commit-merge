// C - Medium

#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main() {
//    TODO: Implement the program requested in the task description
    
    FILE *csv_file = fopen("data.csv", "r");
    char c_list[1000];
    char *str_ptr;
    fgets(c_list, sizeof(c_list), csv_file);
    printf("Header: %s\n", c_list);

    while(fgets(c_list, sizeof(c_list), csv_file)){
        printf("Reading line: %s",c_list);
        str_ptr = strtok(c_list,",");
        printf("Name: %s\n", str_ptr);
        str_ptr = strtok(NULL,",");
        printf("Age: %s\n", str_ptr);
    }
    fclose(csv_file);
    
    return 0;
}