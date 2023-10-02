// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit
#include<iostream>
using namespace std;
int main()
{
    int c;
    float f;
    cout<<"enter the temp in degree celsius : ";
    cin>>c;
    f = (((1.8)*c) + 32);
    cout<<"temp in fahrenheit is : "<<f<<endl;
    return 0;  
}
