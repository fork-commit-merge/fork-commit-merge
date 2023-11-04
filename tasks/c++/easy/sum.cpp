// C++ - Easy 2

// TODO: Create a Basic C++ Program to Add Two Numbers
#include<iostream>

int sum(int a, int b);
int main(void)
{
    int num1, num2;
    std::cout << "Enter two numbers: ";
    std::cin >> num1, std::cin >> num2;
    std::cout << sum(num1, num2);
    return 0;
}

int sum(int a, int b)
{
    return a + b;
}