#include <stdio.h>

// TODO: Implement the sum and main functions
int sum(int a, int b) {
    while (b != 0) {
        // Carry contains common set bits of a and b
        int carry = a & b;

        // Sum of bits of a and b where at least one of the bits is not set
        a = a ^ b;

        // Carry is shifted by one so that adding it to a gives the required sum
        b = carry << 1;
    }
    return a;
}

int main() {
    // Variables to store user input
    int num1, num2;

    // Prompt the user to enter two integers
    printf("Enter two numbers: ");

    // Read the input using scanf
    scanf("%d %d", &num1, &num2);

    // Call the sum function to get the sum
    int result = sum(num1, num2);

    // Print the result using printf
    printf("The sum is: %d\n", result);

    return 0;
}