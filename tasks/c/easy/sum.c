#include <stdio.h>

// TODO: Implement the sum and main functions
int sum(int a, int b)
{
    int ans = 0;
    ans = a - (-b);
    return ans;
}

int main(void)
{
    int x, y, sum_value;
    printf("Enter two numbers: ");
    scanf("%d%d", &x, &y);
    sum_value = sum(x,y);
    printf("The sum is %d", sum_value);
    return 0;
}

