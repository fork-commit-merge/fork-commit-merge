#include <iostream>
using namespace std;

double celsiusToFahrenheit(double c) {
	double f = (c*9.0)/5.0 + 32;
	return f;
}

int main() {
	double c,f;

	cout << "Enter temperature in Celsius: ";
	cin >> c;

	f = celsiusToFahrenheit(c);

	cout << "Temperature in Fahrenheit: " << f << "\n";

	return 0;
}
