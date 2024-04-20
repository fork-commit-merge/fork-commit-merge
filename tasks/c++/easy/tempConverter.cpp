#include <iostream>
using namespace std;

int main() {
  float a;
  cout << "Please give a temperature(C)\n";
  cin >> a;
  cout << "Temperature(F): " << ((a * 9 / 5) + 32)<<endl;
  return 0;
}