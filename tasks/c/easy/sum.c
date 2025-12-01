// C - Easy

#include <stdio.h>

int sum(int a, int b){
    b = b * -1;
    return a - b;
}

int main(void){
    int x, y;
    printf("Enter two numbers: ");
    scanf("%i %i", &x, &y);
    int total = sum(x, y);
    printf("The sum is: %i", total);
}
