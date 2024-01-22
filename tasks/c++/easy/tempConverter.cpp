#include <iostream>

int main() {
    // Declare variables to store temperature values
    double celsius, fahrenheit;

    // Prompt the user for input
    std::cout << "Enter temperature in Celsius: ";
    std::cin >> celsius;

    // Convert Celsius to Fahrenheit
    fahrenheit = (celsius * 9.0 / 5.0) + 32.0;

    // Display the converted temperature
    std::cout << "Converted temperature in Fahrenheit: " << fahrenheit << std::endl;

    return 0;
}
