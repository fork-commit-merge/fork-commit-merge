#include <iostream>
#include <string>

#include <algorithm> // For std::reverse

std::string reverseString(const std::string &str) {
    std::string reversedStr = str; // Create a copy of the input string
    std::reverse(reversedStr.begin(), reversedStr.end()); // Reverse the copy
    return reversedStr;
}

int main() {
    std::string input;
    std::getline(std::cin, input);

    std::string reversed = reverseString(input);
    std::cout << reversed << std::endl;
    
    return 0;
}

