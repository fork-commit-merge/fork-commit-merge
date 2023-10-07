// C - Easy

#include <stdio.h>

int sum(int a, int b){
    return a+b;
}
int main() {
    int a =0, b=0;
    printf("Enter two Number seperating by space: ");
    scanf("%d %d", &a, &b);
    printf("The sum is: %d",sum(a, b));

    return 0;
}
