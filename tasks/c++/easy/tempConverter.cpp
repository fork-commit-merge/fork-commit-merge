#include <iostream>
using namespace std;

int main() {
    double celsius, fahrenheit;

    // Prompt the user to enter a temperature in Celsius
    cout << "Enter temperature in Celsius: ";
    cin >> celsius;

    // Convert Celsius to Fahrenheit
    fahrenheit = (celsius * 9.0 / 5.0) + 32;

    // Display the converted temperature in Fahrenheit
    cout << "Temperature in Fahrenheit: " << fahrenheit << endl;

    return 0;
}
