// C - Easy

#include <stdio.h>

// TODO: Implement the sum function

int sum(int a, int b);

int main() {
    // TODO: Implement the main function
    int a = 0;
    int b = 0;
    printf("Enter in two numbers: ");
    scanf("%d", &a);
    scanf("%d", &b);
    printf("the sum is: %d\n", sum(a,b));
    return 0;
}

int sum(int a, int b){
    return a+b;
}
