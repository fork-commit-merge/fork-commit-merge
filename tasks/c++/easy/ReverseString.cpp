#include <iostream>
#include <string>

std::string reverseString(const std::string &str)
{
    // TODO: Implement the reverseString function
    std::string reversed = str;                     // Create a copy of the input string
    std::reverse(reversed.begin(), reversed.end()); // Reverse the string in place
    return reversed;                                // Return the reversed string
}

int main()
{
    // TODO: Implement the main method
    std::string input;
    std::cout << "Enter a string to reverse: ";
    std::getline(std::cin, input);                           // Read the input string
    std::string output = reverseString(input);               // Call the reverseString function
    std::cout << "Reversed string: " << output << std::endl; // Print the reversed string
    return 0;
}
