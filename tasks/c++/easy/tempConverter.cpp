#include <iostream>

int main() {
    double celsius, fahrenheit;

    std::cout << "Enter the temperature in Celsius: ";
    std::cin >> celsius;

    fahrenheit = (celsius * 9.0 / 5.0) + 32;

    std::cout << "Temperature in Fahrenheit: " << fahrenheit << " degrees Fahrenheit" << std::endl;

    return 0;
}
