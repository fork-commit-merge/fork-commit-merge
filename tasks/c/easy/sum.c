#include <stdio.h>

// Function to calculate the sum of two integers
int sum(int num1, int num2) {
    return num1 + num2;
}

int main() {
    int a, b;

    // Prompt the user to enter two numbers
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    int result = sum(a, b);

    // Print the result
    printf("The sum is: %d\n", result);

    return 0;
}
