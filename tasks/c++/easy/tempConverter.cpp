// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit
#include <iostream>

int main(){
	double temp_cel, temp_feh;
	std::cout << "Enter the temprature in Celsius: ";
	std::cin >> temp_cel;
	temp_feh = temp_cel*1.8 + 32;
	std::cout << "The temperature " << temp_cel << "C is " << temp_feh << " in Fahrenheit\n";
	return 0;
}
