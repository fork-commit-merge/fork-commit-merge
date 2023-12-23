#include <iostream>
#include <string>

std::string reverseString(const std::string &str) {
    // TODO: Implement the reverseString function
    reverse(str.begin(),str.end());
    return str;
}

int main() {
    // TODO: Implement the main method
    string str;
    cout<<"Enter a string:";
    cin>>str;
    reverseString(str);
    cout<<"Reversed String:"<<str<<endl;
}

