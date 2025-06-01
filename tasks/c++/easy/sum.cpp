// C++ - Easy 2

// TODO: Create a Basic C++ Program to Add Two Numbers
#include<iostream>
using namespace std;
int f(int a=0,int b=0){
	return a+b;
}
int main()
{
  int a,b;
  cin>>a>>b;
  cout<<f(a,b);
  return 0; 
}
