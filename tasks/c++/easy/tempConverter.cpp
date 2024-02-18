#include <iostream>

int main() {
    char choice;
    double temperature, convertedTemperature;

    std::cout << "Temperature Converter\n";
    std::cout << "---------------------\n";

    // Get user's choice for conversion
    std::cout << "Choose conversion type ('C' for Celsius to Fahrenheit, 'F' for Fahrenheit to Celsius): ";
    std::cin >> choice;

    // Validate user's choice
    if (choice != 'C' && choice != 'F') {
        std::cout << "Invalid choice. Exiting program.\n";
        return 1;
    }

    // Get temperature from the user
    std::cout << "Enter temperature: ";
    std::cin >> temperature;

    // Perform conversion based on user's choice
    if (choice == 'C') {
        // Celsius to Fahrenheit conversion
        convertedTemperature = (temperature * 9 / 5) + 32;
        std::cout << "Converted temperature: " << convertedTemperature << " Fahrenheit\n";
    } else {
        // Fahrenheit to Celsius conversion
        convertedTemperature = (temperature - 32) * 5 / 9;
        std::cout << "Converted temperature: " << convertedTemperature << " Celsius\n";
    }

    return 0;
}
