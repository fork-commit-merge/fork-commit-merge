// C++ - Easy 2

// TODO: Create a Basic C++ Program to Add Two Numbers

#include <iostream>

int main()
{
    int num1, num2, sum;
    
    // Input two numbers from user
    std::cout << "Enter first number: ";
    std::cin >> num1;
    
    std::cout << "Enter second number: ";
    std::cin >> num2;
    
    // Add the numbers
    sum = num1 + num2;
    
    // Display the sum
    std::cout << "Sum of " << num1 << " and " << num2 << " is " << sum << std::endl;
    
    return 0;
}
