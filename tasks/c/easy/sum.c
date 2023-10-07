#include <stdio.h>

int sum(int a,int b);  //funtion declaration

int main() {
    int a,b;
    printf("Enter two numbers:");
    scanf("%d%d",&a,&b);
    printf("The sum is: %d",sum(a,b));    //function calling
    return 0;
}

int sum(int a,int b)        //function definition
{
    return a+b;
}
