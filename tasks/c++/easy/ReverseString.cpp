#include <iostream>
#include <string>
using namespace std;
string reverseString(string &str) {
    // TODO: Implement the reverseString function
    int i, len, temp;
    len = str.length();


    for(i = 0;i < len/2;i++)
    {
       
        temp = str[i];
        str[i] = str[len - i - 1];
        str[len - i - 1] = temp;
    }
        
    return str;
}

int main() {
    // TODO: Implement the main method
    
    string str = "fork-commit-merge";
    reverseString(str);
    cout<<str;
}