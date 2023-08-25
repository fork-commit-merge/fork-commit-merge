// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit

#include<iostream>
using namespace std;

int main(){
    int C,F;
    cout<<"Enter  Celsius value : ";
    cin>>C;

    F = (C*9)/5+32;
    
    cout<<"Fahrenheit value : "<<F<<endl;
    return 0;
}
