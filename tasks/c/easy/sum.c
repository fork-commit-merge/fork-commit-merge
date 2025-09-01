// C - Easy

#include <stdio.h>

// TODO: Implement the sum and main functions
int sum(int a, int b){
    return a+b;
}

int main(int argc, char* argv[]){
    int a, b, result;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    result = sum(a, b);
    printf("The sum is: %d\n", result);
    return 0;
}