// Java - Medium

package tasks.java.medium;

public class Calculator {
    // Method to add two numbers
    public double add(double num1, double num2)
    {
        return num1 + num2;
    }

    // Method to subtract two numbers
    public double subtract(double num1, double num2)
    {
        return num1 - num2;
    }

    // Method to multiply two numbers
    public double multiply(double num1, double num2)
    {
        return num1 * num2;
    }

    // Method to divide two numbers
    public double divide(double num1, double num2)
    {
        if (num2 == 0) {
            throw new ArithmeticException("Zero as denominator not allowed");
        }
        return num1 / num2;
    }
    public static void main(String[] args) {
        //! Dont't change the tests in the main method!
        Calculator calc = new Calculator();

        System.out.println("Addition: " + calc.add(5, 3));
        System.out.println("Subtraction: " + calc.subtract(5, 3));
        System.out.println("Multiplication: " + calc.multiply(5, 3));
        System.out.println("Division: " + calc.divide(5, 3));
    }
}

