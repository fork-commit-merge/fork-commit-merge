#include <iostream>
using namespace std;

int main() {
    // TODO: Implement the temperature converter
    double temp;
    int choice;

    cout << "Temperature Converter\n";
    cout << "1. Celsius to Fahrenheit\n";
    cout << "2. Fahrenheit to Celsius\n";
    cout << "Enter your choice (1 or 2): ";
    cin >> choice;

    if (choice == 1) {
        cout << "Enter temperature in Celsius: ";
        cin >> temp;
        double fahrenheit = (temp * 9.0 / 5.0) + 32;
        cout << "Temperature in Fahrenheit: " << fahrenheit << "°F" << endl;
    } else if (choice == 2) {
        cout << "Enter temperature in Fahrenheit: ";
        cin >> temp;
        double celsius = (temp - 32) * 5.0 / 9.0;
        cout << "Temperature in Celsius: " << celsius << "°C" << endl;
    } else {
        cout << "Invalid choice!" << endl;
    }

    return 0;
}
