#include <stdio.h>

int sum(int a, int b){
    return a+b;
}

void main(){
    int num1,num2;
    printf("Enter 1st number ");
    scanf("%d",&num1);
    printf("Enter 2nd number ");
    scanf("%d",&num2);
    int added;
    added = sum(num1,num2);
    printf("Sum of %d and %d is %d \n",num1,num2,added);

}