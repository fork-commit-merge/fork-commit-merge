// Java - Medium

package tasks.java.medium;

public class Calculator {
    // TODO: Implement the Calculator class
    // Method to add two numbers
    public int add(int a, int b) {
        return a + b;
    }
    //Method to substract two numbers
    public int subtract(int a, int b) {
        return a - b;
    }
    //Method to multipply two numbers
    public int multiply(int a, int b) {
        return a * b;
    }
    //Method to divide two numbers
    public double divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Division by zero is not allowed.");
        }
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
