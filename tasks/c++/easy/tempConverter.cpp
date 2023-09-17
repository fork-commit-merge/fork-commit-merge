// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit
#include <iostream>

int main(){
    float celsius, fahrenheit;
    std::cout << "Enter temperature in Celsius: ";
    std::cin >> celsius;
    fahrenheit = (celsius*1.8) + 32;
    std::cout << "Temperature in Fahrenheit: " << fahrenheit;
}