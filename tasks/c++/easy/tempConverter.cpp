#include <iostream>

int main() {
    // Declare variable to store temperature in Celsius
    double celsius;

    // Get input from the user
    std::cout << "Enter temperature in Celsius: ";
    std::cin >> celsius;

    // Convert Celsius to Fahrenheit
    double fahrenheit = (celsius * 9 / 5) + 32;

    // Display the result
    std::cout << "Temperature in Fahrenheit: " << fahrenheit << std::endl;

    return 0;
}
