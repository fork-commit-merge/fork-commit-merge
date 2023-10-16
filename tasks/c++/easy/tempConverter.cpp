// C++ - Easy
// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit
#include<bits/stdc++.h>
using namespace std;

// Function to Convert Temperature from Celsius in Fahrenheit
double CeltoFeh(double C){
   double F;
   F = ((C*9)/5 + 32);
   return F;
}

int main(){
    
    // C variable representing Celsius
    double C;

    // Take a value of Temperature from a user in Celsius
    cout << "Enter temperature in Celsius: ";
    cin>>C;
    
    // Printing the value of Fahrenheit
    cout << "Temperature in Fahrenheit: " << CeltoFeh(C) << endl;
    
    return 0;
}