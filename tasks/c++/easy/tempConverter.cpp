// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit
#include<iostream>
using namespace std;

int main()
{
    float Temp;
    cout<<"Please enter the value of Temperature in Celsius:";
    cin>>Temp;
    Temp= ((Temp*9)/5)+32;
    cout<<"The value Temperature in Fahrenheit is "<<Temp<<endl;
    return 0;
}