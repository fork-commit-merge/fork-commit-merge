package tasks.java.medium;

public class Calculator {
    // Method to perform addition
    public double add(double num1, double num2) {
        return num1 + num2;
    }

    // Method to perform subtraction
    public double subtract(double num1, double num2) {
        return num1 - num2;
    }

    // Method to perform multiplication
    public double multiply(double num1, double num2) {
        return num1 * num2;
    }

    // Method to perform division
    public double divide(double num1, double num2) {
        if (num2 == 0) {
            throw new IllegalArgumentException("Division by zero is not allowed.");
        }
        return num1 / num2;
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
