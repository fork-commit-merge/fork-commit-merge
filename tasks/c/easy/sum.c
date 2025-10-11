// C - Easy

#include <stdio.h>

// TODO: Implement the sum and main functions
int sum(int a, int b)
{
    return a + b;
}
int main()
{
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d\n", sum(a, b));
    return 0;
}