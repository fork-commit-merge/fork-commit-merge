#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE_LENGTH 1024

typedef struct {
  char *name;
  int age;
} Person;

void read_csv_file(const char *filename, Person **people, int *num_people) {
  FILE *fp = fopen(filename, "r");
  if (fp == NULL) {
    perror("fopen");
    exit(EXIT_FAILURE);
  }

  char line[MAX_LINE_LENGTH];
  while (fgets(line, MAX_LINE_LENGTH, fp) != NULL) {
    // Tokenize the line to extract individual fields.
    char *name = strtok(line, ",");
    char *age_str = strtok(NULL, ",");
    int age = atoi(age_str);

    // Create a new Person object and add it to the array.
    Person *person = malloc(sizeof(Person));
    person->name = name;
    person->age = age;
    people[*num_people] = person;
    (*num_people)++;
  }

  fclose(fp);
}

void print_people(Person **people, int num_people) {
  printf("Header: Name,Age\n");

  for (int i = 0; i < num_people; i++) {
    Person *person = people[i];
    printf("Reading line: %s,%d\n", person->name, person->age);
    printf("Name: %s\n", person->name);
    printf("Age: %d\n", person->age);
  }
}

int main() {
  // Create an array to store the people read from the CSV file.
  Person **people = malloc(sizeof(Person *) * 100);
  int num_people = 0;

  // Read the CSV file.
  read_csv_file("data.csv", people, &num_people);

  // Print the people.
  print_people(people, num_people);

  // Free the memory allocated for the people array.
  for (int i = 0; i < num_people; i++) {
    free(people[i]);
  }
  free(people);

  return 0;
}

