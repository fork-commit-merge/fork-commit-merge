#include <iostream>
using namespace std;

int main() {
    double celsius, fahrenheit;

    // Prompt the user for input
    cout << "Enter temperature in degrees Celsius: ";
    cin >> celsius;

    // Convert Celsius to Fahrenheit
    fahrenheit = (celsius * 9.0 / 5.0) + 32.0;

    // Display the result
    cout << "Temperature in Fahrenheit: " << fahrenheit << " °F" << endl;

    return 0;
}
