#include <iostream>
using namespace std;

int main() {
  // TODO: Implement the temperature converter
  int cel_temp;
  cout<<"Enter the temp in deg celsius to get temp in fah : ";
  cin>>cel_temp;
  int fah_temp=(cel_temp*9/5)+32;
  cout<<"your temp in deg fah is : "<< fah_temp;
}