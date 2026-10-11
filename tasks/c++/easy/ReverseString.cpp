#include <iostream>
#include <string>

std::string reverseString(const std::string &str) {
    std::string reversed = str;

    int left = 0;
    int right = reversed.length() - 1;

    while (left < right) {
        char temp = reversed[left];
        reversed[left] = reversed[right];
        reversed[right] = temp;

        left++;
        right--;
    }

    return reversed;
}

int main() {
    std::string input;

    std::cout << "Enter a string: ";
    std::getline(std::cin, input);

    std::cout << "Reversed string: " << reverseString(input) << std::endl;

    return 0;
}
