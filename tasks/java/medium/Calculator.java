// Java - Medium

package tasks.java.medium;

public class Calculator {
    // TODO: Implement the Calculator class

    // Addition
    public int add(int a, int b) {
        return a + b;
    }

    // Subtraction
    public int subtract(int a, int b) {
        return a - b;
    }

    // Multiplication
    public int multiply(int a, int b) {
        return a * b;
    }

    // Division
    public double divide(int a, int b) {
        // Check for division by zero
        if (b == 0) {
            throw new ArithmeticException("Cannot divide by zero");
        }

        // Perform division and return the result
        return (double) a / b;
    }

    public static void main(String[] args) {
        //! Don't change the tests in the main method!
        Calculator calc = new Calculator();

        System.out.println("Addition: " + calc.add(5, 3));
        System.out.println("Subtraction: " + calc.subtract(5, 3));
        System.out.println("Multiplication: " + calc.multiply(5, 3));
        System.out.println("Division: " + calc.divide(5, 3));
    }
}

