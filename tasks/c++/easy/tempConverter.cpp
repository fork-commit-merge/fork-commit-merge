// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit
#include <iostream>
using namespace std;

int main() {
    double celsius, fahrenheit;

    // Prompt the user to enter a temperature in Celsius
    cout << "Enter temperature in Celsius: ";
    cin >> celsius;

    // Convert Celsius to Fahrenheit
    fahrenheit = (celsius * 9/5) + 32;

    // Displaying the converted temperature
    cout << "Equivalent temperature in Fahrenheit: " << fahrenheit<< endl;
    return 0;
}
