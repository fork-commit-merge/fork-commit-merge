#include <iostream>

int main() {
    int choice;
    double temp, converted;

    std::cout << "--- Temperature Converter ---\n";
    std::cout << "1. Celsius to Fahrenheit\n";
    std::cout << "2. Fahrenheit to Celsius\n";
    std::cout << "Enter your choice (1 or 2): ";
    std::cin >> choice;

    if (choice == 1) {
        std::cout << "Enter temperature in Celsius: ";
        std::cin >> temp;
        converted = (temp * 9.0 / 5.0) + 32.0;
        std::cout << temp << " C = " << converted << " F" << std::endl;
    } else if (choice == 2) {
        std::cout << "Enter temperature in Fahrenheit: ";
        std::cin >> temp;
        converted = (temp - 32.0) * 5.0 / 9.0;
        std::cout << temp << " F = " << converted << " C" << std::endl;
    } else {
        std::cout << "Invalid choice! Please select 1 or 2." << std::endl;
    }

    return 0;
}
