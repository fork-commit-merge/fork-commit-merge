#include <iostream>

int main() {
  // TODO: Implement the temperature converter
    float celsius;    
    float fahrenheit; 

    
    std::cout << "Enter the temperature in Celsius: "; 

    
    std::cin >> celsius; 

    
    fahrenheit = (celsius * 9.0 / 5.0) + 32;

    
    std::cout << "The temperature in Fahrenheit is: " << fahrenheit << std::endl; 

    return 0; 
}