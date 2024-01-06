#include <iostream>
using namespace std;

float convertToFarenheit(float temp){
  float newTemp = temp*(9.0/5) + 32.0;
  return newTemp;
}

int main() {
  // TODO: Implement the temperature converter
  float temp_celcius;
  cout<<"Enter the temperature in celcius: ";
  cin>>temp_celcius;
  float farenheit_temp = convertToFarenheit(temp_celcius);
  cout<<"The temperature in farenheit is: "<<farenheit_temp<<endl;
  return 0;
}