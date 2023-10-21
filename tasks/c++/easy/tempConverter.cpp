// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit
#include <iostream>

using namespace std;

int main() {
    double celsius, fahrenheit;

    cout << "Enter temperature in Celsius: ";
    cin >> celsius;

    fahrenheit = (celsius * 9.0/5.0) + 32;

    cout << "Temperature in Fahrenheit: " << fahrenheit << endl;

    return 0;
}
