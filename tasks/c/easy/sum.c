#include <stdio.h>

// TODO: Implement the sum and main functions
int sum(int a, int b){
	int res = a + b;
	return res;
}
int main(){
	int x; 
	printf("enter first number\n");
	scanf("%d", &x);
	int y;
	printf("enter second number\n");
	scanf("%d", &y);
	int s = sum(x,y);
	printf("the sum is %d", s);
}
