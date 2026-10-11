// C - Easy

#include <stdio.h>

int sum(int a, int b) {
    return a + b;
}

int main() {
    int a, b;

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    printf("The sum is: %d\n", sum(a, b));

    return 0;
}
