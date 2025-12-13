#include <iostream>
#include <string>

using namespace std;

string reverseString(const string &str) {
    string reversed = "";

    // loop from last character to first
    for (int i = str.length() - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

int main() {
    string input;

    cout << "Enter a string: ";
    cin >> input;

    string result = reverseString(input);

    cout << "Reversed string: " << result << endl;

    return 0;
}
