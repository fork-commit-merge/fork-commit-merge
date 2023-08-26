// C++ - Easy

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit

#include <iostream>

//a function to convert celsius to farenheit
double celsiusToFarenheit(double celsius)
{
	return (celsius * 9.0 / 5.0 + 32);//return statement
}

int main()
{
	double celsius;//initialization
	
	std::cout<<"Enter the temperature in Celsius : ";
	std::cin>>celsius;//input
	
	std::cout<<celsius<<"°C = "<<celsiusToFarenheit(celsius)<<"°F"<<std::endl;//output
	
	return 0;//return statement
}