#include <iostream>
#include <string>

std::string reverseString(const std::string &str) {
    // Use the reverse iterator to construct a reversed string
    return std::string(str.rbegin(), str.rend());
}

int main() {
    // Get input from the user
    std::cout << "Enter a string: ";
    std::string input;
    std::getline(std::cin, input);

    // Call the reverseString function and display the result
    std::string reversed = reverseString(input);
    std::cout << "Reversed String: " << reversed << std::endl;

    return 0;
}
