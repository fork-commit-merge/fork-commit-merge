#include <iostream>
#include <string>

std::string reverseString(const std::string &str) {
    // TODO: Implement the reverseString function

    int length = str.length();
    int i = 0;
    int j = length - 1; 

    std::string new_string;
    new_string = str;
  
    while (i < j) { 
      char temp = new_string[i];
      new_string[i] = new_string[j];
      new_string[j] = temp;
      i++;
      j--;
    }

   return new_string;
}

int main() {
    // TODO: Implement the main method
    std::string input_string;
    std::string rev_string;
    
    std::cout << "Enter a string: ";
    std::getline(std::cin, input_string);

    rev_string = reverseString(input_string);

    std::cout << "Reversed string: " << rev_string << std::endl;

    return 0;
}

