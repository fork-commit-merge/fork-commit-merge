#include <iostream>
#include <string>

std::string reverseString(const std::string &str)
{
    // TODO: Implement the reverseString function
    std::string reversed;
    for (int i = str.length() - 1; i >= 0; --i)
    {
        reversed += str[i];
    }
}

int main()
{
    // TODO: Implement the main method
    std::string input;
    std::cout << "Enter a string: ";
    std::getline(std::cin, input);
    std::string reversed = reverseString(input);
    std::cout << "Reversed string: " << reversed << std::endl;
    return 0;
}
