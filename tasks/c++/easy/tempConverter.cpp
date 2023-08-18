// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit

#include <iostream>
using namespace std;

int main(){
    float celsius,fahrenheit;
    //Taking input from user
    cout<<"Enter temperature in Celsius:";
    cin>>celsius;
    //Conversion from Celcius to Fahrenheit
    fahrenheit = celsius * 1.8 + 32;
    //Displaying the output
    cout<<celsius<<" degrees Celsius is equal to "<<fahrenheit<<" degrees Fahrenheit";

}
