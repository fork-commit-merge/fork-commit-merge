#include <stdio.h>

// TODO: Implement the sum and main functions
int sum(int a, int b);

int main() 
{
    int num1, num2;

    printf("Enter two numbers: ");

    if (scanf("%d %d", &num1, &num2) != 2) 
    {
        printf("Error: Invalid input. Please enter two integers.\n");
        return 1; 
    }

    int result = sum(num1, num2);

    printf("The sum is: %d\n", result);

    return 0;
}

int sum(int a, int b)
{
    while (b != 0) 
    {
        unsigned int carry = (unsigned int)(a & b) << 1;

        a = a ^ b;
        
        b = carry;
    }
    return a;
}
