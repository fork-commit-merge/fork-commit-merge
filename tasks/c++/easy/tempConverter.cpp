#include <iostream>

int main() {
  double celsius;
  double fahrenheit;

  // User is asked to type a Celsius temperature
  std::cout << "Enter the Celsius temperature: ";
  std::cin >> celsius;

  // Converts Celsius to Fahrenheit temperature
  fahrenheit = (((celsius * 9) / 5) + 32);

  // Fahrenheit temperature is displayed to the user
  std::cout << "The Celsius temperature in Fahrenheit: " << fahrenheit << std::endl;

  return 0;
}
