#include <stdio.h>

// Function to calculate the sum of two integers
int sum(int a, int b) {
    return a + b;
}

int main() {
    int num1, num2;

    // Prompt the user to enter two integers
    printf("Enter two numbers: ");
    
    // Read the integers using scanf
    scanf("%d %d", &num1, &num2);

    // Call the sum function to get the sum
    int result = sum(num1, num2);

    // Print the result using printf
    printf("The sum is: %d\n", result);

    return 0;
}
