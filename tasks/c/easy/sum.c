    // C - Easy

    #include <stdio.h>

    // TODO: Implement the sum function
    int sum(int a, int b)
    {
        return a + b;
    }

    int main()
    {
        // TODO: Implement the main function
        int num1, num2, result;
        printf("Enter two numbers: ");
        scanf("%d %d", &num1, &num2);
        result = sum(num1, num2);
        printf("The sum is: %d\n", result);
        return 0;
    }
