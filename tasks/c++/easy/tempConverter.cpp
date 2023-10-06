// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit

#include <iostream>
using namespace std;
  
int main() {
    float fahren, celsius;
  
    cout << "Enter the temperature in celsius\n";
    cin >> celsius;
  
    // convert celsius to fahreneheit 
    // Multiply by 9, then divide by 5, then add 32
    fahren =(9.0/5.0) * celsius + 32;
  
    cout << celsius <<"Centigrade is equal to " << fahren 
        <<"Fahrenheit";
      
    return 0;
}

