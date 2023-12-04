// C++ - Easy 2

// TODO: Create a Basic C++ Program to Add Two Numbers
#include <iostream>

int main() {
    // Declare variables to store user input
    int num1, num2;

    // Prompt the user to enter two numbers
    std::cout << "Enter the first number: ";
    std::cin >> num1;

    std::cout << "Enter the second number: ";
    std::cin >> num2;

    // Calculate the sum
    int sum = num1 + num2;

    // Display the result
    std::cout << "The sum is: " << sum << std::endl;

    return 0;
}
