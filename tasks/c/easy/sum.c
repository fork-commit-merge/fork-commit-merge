// C - Easy

#include <stdio.h>

int sum(int a, int b){
    int total  = a + b;
    return total;
}

// This is from "https://www.geeksforgeeks.org/how-to-sum-two-integers-without-using-arithmetic-operators-in-cc/"
// I won't try to explain it as I don't fully understand it.
int sum_without_plus(int a, int b){
    char *p = a;
    return (int)&p[b];
}

int main() {
    int b=0;
    int a = 0;
    int total = 0;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    total = sum(a,b);
    printf("The sum is : %d\n", total);
    total = sum_without_plus(a,b);
    printf("The sum_without_plus is : %d\n", total);

    return 0;
}
