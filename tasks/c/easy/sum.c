// C - Easy

// #include <stdio.h>

// // TODO: Implement the sum function

// int main() {
//     // TODO: Implement the main function

//    
#include<iostream>
using namespace std;


int add(int a,int b)
{
    return a+b;
}
int main()
{
    cout<<"Enter two numbers: ";
    int a,b;
    cin>>a>>b;
    cout<<"Sum of two numbers is "<<add(a,b);
}