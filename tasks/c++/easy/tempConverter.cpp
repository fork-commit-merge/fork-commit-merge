// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit

#include <iostream>

using namespace std;

float celsiusToFahrenheit(float celsius) 
{
  return celsius * 9 / 5 + 32;
}

int main() 
{
  float celsius, fahrenheit;

  cout << "Enter temperature in Celsius: ";
  cin >> celsius;

  fahrenheit = celsiusToFahrenheit(celsius);

  cout << "Temperature in Fahrenheit: " << fahrenheit << endl;

  return 0;
}
