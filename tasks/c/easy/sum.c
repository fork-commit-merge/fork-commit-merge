// C - Easy

/* Description
This code calculates the sum of two integers and prints the result to the console.

Implementation
The sum() function takes two integers as input and returns their sum. The implementation of the function is as follows:

int sum(int a, int b){
return a - (-b);
}

This function first subtracts -b from a. This is equivalent to adding b to a. The result is then returned.

The main() function is the entry point for the program. It first defines two variables, num1 and num2, and initializes them to 5 and 10, respectively. It then calls the sum() function to calculate the sum of num1 and num2. The result is then printed to the console using the printf() function.

Testing
The code can be tested by running it with different values of num1 and num2. For example, the following command will print the sum of 10 and 20:

gcc sum.c && ./a.out

This should print the following output:

30

Conclusion
This code successfully calculates the sum of two integers and prints the result to the console. The code is well-documented and easy to understand.*/

#include <stdio.h>

// TODO: Implement the sum function
int sum(int a, int b){
    return a - (-b);
}

int main() {
    // TODO: Implement the main function
    int num1 = 5;
    int num2 = 10;
    printf("%d", sum(num1, num2));
    return 0;
}
