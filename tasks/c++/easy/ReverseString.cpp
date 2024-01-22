#include <iostream>
#include <string>

std::string reverseString(const std::string &str) {
    // TODO: Implement the reverseString function
       int length = str.length();
    std::string reversed = str;  // Create a copy of the original string

    for (int i = 0; i < length / 2; ++i) {
        char temp = reversed[i];
        reversed[i] = reversed[length - i - 1];
        reversed[length - i - 1] = temp;
    }

    return reversed;
}

int main() {
    // TODO: Implement the main method
        std::cout << "Enter a string: ";
    
    // Read the input string
    std::string input;
    std::getline(std::cin, input);

    // Get the reversed string using the reverseString function
    std::string reversed = reverseString(input);

    // Output the reversed string
    std::cout << "Reversed string: " << reversed << std::endl;

    return 0;
}

