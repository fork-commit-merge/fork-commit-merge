// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit

#include <iostream>
using namespace std;

int main() {
    double celsius, fahrenheit;

    // Get temperature in Celsius from user
    cout << "Enter temperature in Celsius: ";
    cin >> celsius;

    // Convert Celsius to Fahrenheit
    fahrenheit = (celsius * 9.0 / 5.0) + 32.0;

    // Display the result
    cout << "Temperature in Fahrenheit: " << fahrenheit << endl;

    return 0;
}
