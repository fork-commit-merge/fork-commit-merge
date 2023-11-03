#include <stdio.h>

// TODO: Implement the sum and main functions
int sum(int a, int b);

int main(void)
{
    int num1, num2;
    printf("Enter two numbers: ");
    scanf("%d%d", &num1, &num2);
    printf("%d", sum(num1, num2));

    return 0;
}

int sum(int a, int b)
{
    return a + b;
}
