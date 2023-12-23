// C++ - Easy 1

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit
#include <iostream>

int main()
{
    float celsius{}, farenheit{};

    std::cout << "Enter temperature in Celsius: "; std::cin >> celsius;
    farenheit = (celsius * 9) / 5 + 32;

    std::cout << "In Farenheit: " << farenheit;
}
