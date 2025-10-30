// C - Easy

#include <stdio.h>

// Function that returns the sum of two integers
int sum(int a, int b) {
    return a + b;
}

int main() {
    // Test the sum function with different values
    printf("Testing sum function:\n");
    printf("sum(2, 3) = %d\n", sum(2, 3));         // Expected: 5
    printf("sum(-1, 1) = %d\n", sum(-1, 1));       // Expected: 0
    printf("sum(0, 0) = %d\n", sum(0, 0));         // Expected: 0
    printf("sum(10, 15) = %d\n", sum(10, 15));     // Expected: 25
    
    return 0;
}
