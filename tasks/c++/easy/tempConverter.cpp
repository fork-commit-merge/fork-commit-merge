// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit
//Aakash Aditya Giri, 01/10/2023

#include<iostream>
using namespace std;

int converter(float celcius)
{
    float farhenheit = 32 + celcius*1.8;

    cout<<"The temperature in Farhenheit scale is: "<<farhenheit<<endl;
}

int main()
{
    float celcius;
    cout<<"Enter the temperature in Celcius: "<<endl;
    cin>>celcius;

    converter(celcius);

    return 0;
}