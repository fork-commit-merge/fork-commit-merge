// C - Easy

#include <stdio.h>

// TODO: Implement the sum function
int sum(int a, int b){
    return a+b;
}

int main() {
    // TODO: Implement the main function
    int a,b;
    printf("Enter two numbers:");
    scanf("%d %d",&a,&b);
    printf("The sum is: %d",sum(a,b));
    return 0;
}
