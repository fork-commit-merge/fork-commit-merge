// C - Easy

#include <stdio.h>

// TODO: Implement the sum and main functions

#include <stdio.h>

// Function to calculate sum of two integers
int sum(int a, int b)
{
    return a + b;
}

int main()
{
    int x = 5, y = 7;
    int result = sum(x, y);

    printf("The sum of %d and %d is %d\n", x, y, result);

    return 0;
}