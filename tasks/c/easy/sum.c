#include <stdio.h>

// TODO: Implement the sum and main functions
int sum(int a, int b){
    return a + b;
}

int main(){
    printf("Enter two numbers: ");
    int a;
    int b;
    scanf("%d %d", &a, &b);
    printf("The sum is: %d\n", sum(a, b));
    return 0;
}
