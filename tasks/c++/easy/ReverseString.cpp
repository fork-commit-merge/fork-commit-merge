#include <iostream>
#include <string>

std::string reverseString(const std::string &str) {
    std::string reversedStr;
    for (int i = str.length() - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

int main() {
    std::string input;
    std::cout << "Enter a string: ";
    std::cin >> input;

    std::string reversed = reverseString(input);

    std::cout << "Reversed string: " << reversed << std::endl;

    return 0;
}