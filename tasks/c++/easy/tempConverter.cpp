// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit
#include<iostream>

double convertToFarenheit(double celsius)
{
    return (celsius * 9/5) + 32;
}

int main()
{
    double celsius;
    std::cout << "Enter the temperature in Celsius: ";
    std::cin >> celsius;
    std::cout << "The temperature in Farenheit is: " << convertToFarenheit(celsius) << std::endl;
    return 0;
}