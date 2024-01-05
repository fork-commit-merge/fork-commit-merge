#include <iostream>
#include <string>
#include <algorithm>

std::string reverseString(const std::string &str) {
    std::string reversedStr = str;
    std::reverse(reversedStr.begin(), reversedStr.end());
    return reversedStr;
}

int main() {
    std::string str;
    std::cout << "Enter a string: ";
    std::cin >> str;
    std::string reversedStr = reverseString(str);
    std::cout << "The reversed string is: " << reversedStr;

    return 0;
}

