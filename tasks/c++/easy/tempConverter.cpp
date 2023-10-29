// C++ - Easy 1

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit

#include <iostream>
using namespace std;

//Function for temperature convertion
void TemperatureConverter(float cel) {
    float fah;
    fah = ((9 * cel) / 5) + 32;     //Formula for calculating the fahrenhit temperature
    cout << "The temperature in Fahrenhit is: " << fah;
}

int main() {
    float cel;
    cout << "Enter the temperature in Celsius: ";
    cin >> cel;                     //Input temperature from user
    TemperatureConverter(cel);      //Function call
}