#include <iostream>

using namespace std;

int main()
{
  // TODO: Implement the temperature converter
  int x = 0;
  cout << "Enter the temperature in C: " << '\n';
  cin >> x;
  x = x * 9.0 / 5.0 + 32.0;

  cout << x << '\n';
}