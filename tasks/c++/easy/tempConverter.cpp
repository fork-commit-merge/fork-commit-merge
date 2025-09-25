#include <iostream>
using namespace std;

int main()
{
  // TODO: Implement the temperature converter
  int choice;
  double temp, converted;
  cout << "===Temperature Converter ===" << endl;
  cout << " 1. Celsius to fahrenheit" << endl;
  cout << "2. Fahrenheit to Celsius " << endl;
  cout << " Enter your choice(1 or 2): ";
  cin >> choice;

  if (choice == 1)
  {
    cout << "Enter temperature in celsius: ";
    cin >> temp;
    converted = (temp * 9 / 5) + 32;
    cout << temp << "°C = " << converted << "°F" << endl;
  }
  else if (choice == 2)
  {
    cout << "Enter temperature in Fahrenheit: ";
    cin >> temp;
    converted = (temp - 32) * 5 / 9;
    cout << temp << "°C = " << converted << "°F" << endl;
  }

  else
  {
    cout << "Invalid choice!" << endl;
  }
  return 0;
}
