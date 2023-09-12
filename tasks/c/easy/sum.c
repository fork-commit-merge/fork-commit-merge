// C - Easy

#include <stdio.h>
int sum(int a,int b){
    return a+b;
}
int main() {
    // Write C code here
    int a,b;
    printf("Enter two numbers:");
    scanf("%d %d",&a,&b);
    printf("The sum is: %d",sum(a,b));
    return 0;
}
