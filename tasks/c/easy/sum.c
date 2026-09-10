// C - Easy

#include <stdio.h>

// TODO: Implement the sum and main functions

int main(){
    int a, b;
    scanf("%d %d", &a, &b);
    sum(a, b);
    return 0;
}

void sum(int a, int b){
    printf("%d\n", a + b);
}