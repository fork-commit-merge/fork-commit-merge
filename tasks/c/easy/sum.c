// C - Easy

#include <stdio.h>
// TODO: Implement the sum and main functions

int sum(int a, int b){
    return (a+b);
}

void main(){
    int a=0, b=0;
    printf("Enter Two Numbers::");
    printf("\nEnter The First Number::--");
    scanf("%d",&a);
    printf("Enter The Second Number::--");
    scanf("%d",&b);
    printf("The Sum of the numbers is:: %d\n", sum(a,b));
    printf("\n");
}


