// C - Easy

#include <stdio.h>

int sum(int a,int b) {
    return a + b;
}

int main() {
    int a = 0;
    int b = 0;
    int total = 0;
    printf("Enter the first integer : ");
    scanf("%d", &a);
    printf("Enter the second integer : ");
    scanf("%d", &b);
    total = sum(a, b);
    printf("Sum of %d and %d is : %d", a, b, total);

    return 0;
}
