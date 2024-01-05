#include <stdio.h>

// Function to calculate the sum of two numbers
int sum(int a, int b) {
    return a + b;
}

// Main function
int main() {
    // TODO: Add your code here
    int num1, num2;

    // Get input from the user
    printf("Enter the first number: ");
    scanf("%d", &num1);

    printf("Enter the second number: ");
    scanf("%d", &num2);

    // Calculate the sum using the sum function
    int result = sum(num1, num2);

    // Display the result
    printf("Sum: %d\n", result);

    return 0;
}
