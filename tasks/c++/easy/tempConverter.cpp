// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit
#include<iostream>
using namespace std;

int main(){
    float fareheit,celsius;
    cout << "Enter temperature??";
    cin >> celsius;
    fareheit=(celsius*9.0)/5.0+ 32;
    cout<< "temperature in Farenheit is" << fareheit;
    return 0;
}