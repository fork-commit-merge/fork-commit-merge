// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit
#include <iostream>
using namespace std;

int main() {
    double celsius, fahrenheit;
    // Prompt the user to enter a temperature in Celsius
    cout << "Enter a temperature in Celsius: ";
    cin >> celsius;

    // Convert the entered temperature to Fahrenheit
    fahrenheit = (celsius * 9.0 / 5.0) + 32.0;

    // Display the converted temperature
    cout <<"Temperature in Fahrenheit: "<<fahrenheit<<endl;

    return 0;
}
