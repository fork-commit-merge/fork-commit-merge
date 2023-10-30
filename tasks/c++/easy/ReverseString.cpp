#include <iostream>
#include <string>

using namespace std;

std::string reverseString(const string &str) {
    string reversed = str;
    int left = 0;
    int right = reversed.size() - 1;

    while (left < right) {
        char temp = reversed[left];
        reversed[left] = reversed[right];
        reversed[right] = temp;

        left++;
        right--;
    }

    return reversed;
}

int main() {
    string input;
    cout << "Enter a string: ";
    cin >> input;

    string reversed = reverseString(input);
    cout << "Reversed string: " << reversed << endl;

    return 0;
}


