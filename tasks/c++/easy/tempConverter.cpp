// C++ - Easy 1

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit

#include <iostream>
using namespace std;

int main()
{
    double celsius, fahrenheit;

    // Input temperature in Celsius
    cout << "Enter temperature in Celsius: ";
    cin >> celsius;

    // Convert Celsius to Fahrenheit
    fahrenheit = (celsius * 9.0 / 5.0) + 32;

    // Display the result
    cout << "Temperature in Fahrenheit: " << fahrenheit << " degrees Fahrenheit" << endl;

    return 0;
}
