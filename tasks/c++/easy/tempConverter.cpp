// C++ - Easy
#include <iostream>
using namespace std;
float tempConvertion(float celcius)
{
    return (9.0 / 5.0) * celcius + 32.0; // convert celciuc to farhenhite
}
int main()
{
    float celcius = 0.0;
    cout << "Enter temperature in celcius: ";
    cin >> celcius;

    cout << "Temprature in Fahrenheit: " << tempConvertion(celcius) << endl; // calling the function

    return 0;
}
// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit
