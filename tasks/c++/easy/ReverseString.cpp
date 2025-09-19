#include <iostream>
#include <string>
using namespace std;

std::string reverseString(const std::string &str) {
     string temp = str;
     reverse(begin(temp),end(temp));
     return temp;
};

int main() {
    // TODO: Implement the main method
    cout << reverseString("hello");
}

