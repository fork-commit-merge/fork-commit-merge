// C++ - Easy 1

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit
#include <iostream>
using namespace std;
int main() {
  
    float tempC,tempF;
    cout<<"Enter Temperature in Celsius: ";
    cin>>tempC;
    tempF = ( tempC * 9/5 ) + 32;
    cout<<"Temperature in Fahrenheit: "<<tempF;
    return 0;
}