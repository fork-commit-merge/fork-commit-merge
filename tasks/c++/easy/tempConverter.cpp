// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit
#include <iostream>
using namespace std;

int main() {
    double celsius, fahrenheit;

    // Prompt the user to enter temperature in Celsius
    cout << "Enter temperature in Celsius: ";
    cin >> celsius;

    // Convert Celsius to Fahrenheit using the formula: F = (C * 9/5) + 32
    fahrenheit = (celsius * 9/5) + 32;

    // Display the result
    cout << "Temperature in Fahrenheit: " << fahrenheit << " °F" << endl;

    return 0;
}