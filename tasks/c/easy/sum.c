#include <stdio.h>

int sum(int a, int b);

int main() {
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
