// C++ - Easy 1
#include <iostream>

using namespace std;

int main()
{
    double celsius, fahrenheit;

    cout << "请输入摄氏温度：";
    cin >> celsius;

    fahrenheit = (celsius * 1.8) + 32;

    cout << "摄氏" << celsius << "度转换为华氏温度为：" << fahrenheit << "度。" << endl;

    return 0;
}

// TODO:  Create a Basic C++ Program to Convert Temperature from Celsius to Fahrenheit
