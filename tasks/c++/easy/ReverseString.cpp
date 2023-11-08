#include <iostream>
#include <string>

std::string reverseString(const std::string &str)
{
    std::string reversedString;
    for (int i = str.length() - 1; i >= 0; --i)
    {
        reversedString += str[i];
    }
    return reversedString;
}

int main()
{
    std::string inputString;
    std::cout << "Enter a string: ";
    getline(std::cin, inputString);

    std::string reversedString = reverseString(inputString);
    std::cout << "Reversed string: " << reversedString << std::endl;

    return 0;
}
