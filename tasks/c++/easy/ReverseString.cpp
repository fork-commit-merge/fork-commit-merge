#include <iostream>
#include <string>
#include <algorithm>

std::string reverseString(const std::string &str)
{
    // TODO: Implement the reverseString function
    std::string reversed = str;
    std::reverse(reversed.begin(), reversed.end());
    return reversed;
}
int main()
{
    // TODO: Implement the main method
    std::string input;

    std::cout << "Enter a string:";
    std::getline(std::cin, input);

    std::string result = reverseString(input);
    std::cout << "Reversed string:" << result << std::endl;

    return 0;
}
