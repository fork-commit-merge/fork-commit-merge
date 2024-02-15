#include <iostream>
#include <string>

std::string reverseString(const std::string &str) {
    // Create a copy of the input string
    std::string reversed = str;

    // Reverse the copy using standard library functions
    std::reverse(reversed.begin(), reversed.end());

    return reversed;
}

int main() {
    // Input string
    std::string inputString;

    // Get user input
    std::cout << "Enter a string: ";
    std::getline(std::cin, inputString);

    // Call the reverseString function
    std::string reversedString = reverseString(inputString);

    // Display the reversed string
    std::cout << "Reversed string: " << reversedString << std::endl;

    return 0;
}
