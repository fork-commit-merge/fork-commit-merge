// C++ - Easy 1

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit


#include <iostream>

double celsiusToFahrenheit(double celsius) {
    // Convert Celsius to Fahrenheit using the formula: F = (C * 9/5) + 32
    return (celsius * 9.0 / 5.0) + 32.0;
}

int main() {
    // Get temperature in Celsius from the user
    double celsius;
    std::cout << "Enter temperature in Celsius: ";
    std::cin >> celsius;

    // Convert Celsius to Fahrenheit
    double fahrenheit = celsiusToFahrenheit(celsius);

    // Display the converted temperature
    std::cout << "Temperature in Fahrenheit: " << fahrenheit << std::endl;

    return 0;
}
