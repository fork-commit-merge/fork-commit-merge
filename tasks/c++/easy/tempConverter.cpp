// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit

#include <iostream>
using namespace std;

int main(){
    float celsius, fahrenheit;
    
    // Asking for input
    cout << "Enter the temperature in Celsius: ";
    cin >> celsius;
    
    // Celsius to fahrenheit
    fahrenheit = (celsius * 9.0) / 5.0 + 32;
    
    // Display result
    cout << "The temperature in degree Fahrenheit: " << fahrenheit << endl;
    
    return 0;
}