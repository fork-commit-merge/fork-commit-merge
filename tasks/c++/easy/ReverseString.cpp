#include <iostream>
#include <string>

std::string reverseString(const std::string &str) {
    
    return std::string(str.rbegin(), str.rend());
}

int main() {
    std::string input;
    
    std::cout << "Enter any string: ";
    std::getline(std::cin, input);

    std::string reversed = reverseString(input);
    
    std::cout << "Reversed string: " << reversed << std::endl;

    return 0;
}
