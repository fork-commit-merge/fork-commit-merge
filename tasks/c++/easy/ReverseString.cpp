#include <iostream>
#include <string>

using namespace std;

std::string reverseString(const std::string &str)
{
    return string(str.rbegin(), str.rend());
}

int main()
{
    string s;
    cout << "Enter a string: ";
    cin >> s;

    string reversed = reverseString(s);
    cout << "Reversed string: " << reversed << '\n';
}
