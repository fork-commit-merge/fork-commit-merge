#include <iostream>

int main() {
    // Declare variables to store the two numbers
    double number1, number2;

    // Prompt the user for input
    std::cout << "Enter the first number: ";
    std::cin >> number1;

    std::cout << "Enter the second number: ";
    std::cin >> number2;

    // Calculate the sum of the two numbers
    double sum = number1 + number2;

    // Print the result to the console
    std::cout << "Sum: " << sum << std::endl;

    return 0;
}
