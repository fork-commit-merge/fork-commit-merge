// C - Medium

#include <stdio.h>
#include <string.h>
#include <stdbool.h>
#include <malloc.h>

typedef struct {
	const char* name;
	const char* age;
} Cell; 

int read_file(char** dest, const char* path);

int main(void) 
{
	const char* fpath = "./data.csv";
	char *data = NULL; 
	int fsize = read_file(&data, fpath); 

	if (fsize < 0) return 1; 

	printf("File content: \n");

	bool first_line = true; 
	char* tkn = strtok(data, ",\n");

	while (tkn != NULL)
	{
		char* fst = tkn; 
		tkn = strtok(NULL, ",\n");

		if (tkn != NULL)
		{
			printf("%s\t%s\n", fst, tkn);
			tkn = strtok(NULL, ",\n");
		}		
	}

	free(data);
	return 0; 
}

int read_file(char** dest, const char* path) 
{
	FILE *buf = fopen(path, "r");
	
	if (buf == NULL) 
	{
		fclose(buf);
		perror("[ERROR] Could not open file");
		return -1;
	}

	fseek(buf, 0, SEEK_END);
	long buf_size = ftell(buf); 
	rewind(buf);

	*dest = malloc(buf_size + 1);
	if (!dest) 
	{
		fclose(buf);
		free(*dest);
		perror("[ERROR] Could not alocate memory. Exiting...");
		return -1;
	}

	size_t bytes_read = fread(*dest, 1, buf_size, buf);
	(*dest)[bytes_read] = '\0';

	fclose(buf);
	return true; 
} 
