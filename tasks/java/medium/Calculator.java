// Java - Medium

package tasks.java.medium;

public class Calculator {
    // TODO: Implement the Calculator class
    public int subtract(int num1, int num2) {
        return num1 - num2;
    }

    // Method to multiply two numbers
    public int multiply(int num1, int num2) {
        return num1 * num2;
    }

    // Method to divide two numbers (returns a double to handle division with decimals)
    public double divide(int num1, int num2) {
        if (num2 != 0) {
            // Avoid division by zero
            return (double) num1 / num2;
        } else {
            // Handle division by zero error
            System.out.println("Error: Division by zero!");
            return Double.NaN; // NaN (Not a Number) represents an undefined or unrepresentable value
        }
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

