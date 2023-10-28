#include <iostream>
#include <string>

std::string reverseString(const std::string &str) {
    // TODO: Implement the reverseString function
   std::string reversedString;
    reversedString.resize(str.length());

    for (int i = str.length() - 1, j = 0; i >= 0; i--, j++) {
        reversedString[j] = str[i];
    }

    return reversedString;
}

int main() {
    // TODO: Implement the main function
       std::string str, reversedString;
   std::cout << "Enter a string: ";
   std::getline(std::cin, str);
   reversedString = reverseString(str);
   std::cout << "Reversed string: " << reversedString << std::endl;
}
