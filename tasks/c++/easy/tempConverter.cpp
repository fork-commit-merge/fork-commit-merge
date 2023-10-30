#include <iostream>
using namespace std;

int main() {
    double celsius, fahrenheit;

    cout << "Enter temperature in Celsius: ";
    cin >> celsius;

    // Formula to convert Celsius to Fahrenheit
    fahrenheit = (celsius * 9.0 / 5.0) + 32.0;

    cout << "Temperature in Fahrenheit: " << fahrenheit << endl;

    return 0;
}
