#include <iostream>
#include <string>
#include<bits/stdc++.h>
std::string reverseString(const std::string &str) {
    // TODO: Implement the reverseString function
    std::string s=str;
    std::reverse(s.begin(),s.end());
    return s;
}

int main() {
    // TODO: Implement the main method
    std::string org="";
    std::cout<<"Enter a string:";
    std::cin>>org;
    std::string rev="";
    rev=reverseString(org);
    std::cout<<"Reversed string:"<<rev;
    return 0;
}

