#include<iostream>
using namespace std;

// C++ - Easy 2

// TODO: Create a Basic C++ Program to Add Two Numbers

void sum(int a, int b){
    cout<<"The sum of two numbers is: "<<a+b<<endl;
}

int main(){
    int a,b;
    cout<<"Enter the first number: ";cin>>a;
    cout<<"Enter the second number: ";cin>>b;
    sum(a, b);
    return 0;
}