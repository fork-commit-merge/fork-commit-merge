#include <iostream>
#include <string>

std::string reverseString(const std::string &str) {
    std::string reversedStr = str; // Copy the input string

    // Reverse the copied string
    for (size_t i = 0, j = reversedStr.length() - 1; i < j; ++i, --j) {
        std::swap(reversedStr[i], reversedStr[j]);
    }

    return reversedStr;
}

int main() {
    // Get input string from the user
    std::string inputStr;
    std::cout << "Enter a string: ";
    std::getline(std::cin, inputStr);

    // Reverse the string
    std::string reversedStr = reverseString(inputStr);

    // Display the reversed string
    std::cout << "Reversed string: " << reversedStr << std::endl;

    return 0;
}

