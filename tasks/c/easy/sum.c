#include <stdio.h>

// TODO: Implement the sum and main functions
int sum(int a,int b)
{
    //return a+b;
    return printf("The sum is: %d",a+b);
}
 int main()
 {
     int a,b;
     printf("Enter the two numbers\n");
     scanf("%d %d",&a,&b);


     sum(a,b);

    // printf("The sum is: %d",sum(a,b));
 }
