// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit

#include <iostream>
#include <iostream>

int main()
{
    int iTemperatureCelsius;
    int iTemperatureFahrenheit;

    std::cout << "Input temp in Celsius: " << std::endl;

    std::cin >> iTemperatureCelsius;

    iTemperatureFahrenheit = (iTemperatureCelsius * 9)/5 + 32;

    std::cout<<"Temp in F: "<<iTemperatureFahrenheit <<std::endl;
}
