#include <iostream>
#include <string>

std::string reverseString(const std::string &str) {
    // TODO: Implement the reverseString function
     int length = str.length();
    std::string reversed;

    // Reverse the string without using built-in functions
    for (int i = length - 1; i >= 0; --i) {
        reversed += str[i];
    }

    return reversed;
}

int main() {
    // TODO: Implement the main method
    std::string input;

    // Ask the user for a string
    std::cout << "Enter a string: ";
    std::getline(std::cin, input);

    // Get the reversed string
    std::string reversed = reverseString(input);

    // Output the reversed string
    std::cout << "Reversed string: " << reversed << std::endl;

    return 0;
}

