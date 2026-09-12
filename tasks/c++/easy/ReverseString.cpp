#include <iostream>
#include <string>

std::string reverseString(const std::string &str) {
    // TODO: Implement the reverseString function
    std::string reversedStr;
    for(int i = str.length() - 1; i >= 0; --i) {
        reversedStr += str[i];
    }

    return reversedStr;

}

int main() {
    // TODO: Implement the main method
    std::string input;

    std::getline(std::cin, input);

    std::cout << reverseString(input) << std::endl;

    return 0;
}

