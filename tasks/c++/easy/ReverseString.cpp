#include <iostream>
#include <string>

// Function to reverse a string without using built-in functions
std::string reverseString(const std::string &str) {
    int length = str.length();
    std::string reversedStr = str; // Create a copy of the input string

    // Reverse the string by swapping characters from the beginning and end
    for (int i = 0; i < length / 2; i++) {
        char temp = reversedStr[i];
        reversedStr[i] = reversedStr[length - i - 1];
        reversedStr[length - i - 1] = temp;
    }

    return reversedStr;
}

int main() {
    std::string inputStr;
    
    // Ask the user for a string
    std::cout << "Enter a string: ";
    std::cin >> inputStr;

    // Call the reverseString function to reverse the input string
    std::string reversedStr = reverseString(inputStr);

    // Output the reversed string
    std::cout << "Reversed string: " << reversedStr << std::endl;

    return 0;
}

