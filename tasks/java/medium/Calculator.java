// Java - Medium

package tasks.java.medium;

public class Calculator {
    // TODO: Implement the Calculator class

    public static void main(String[] args) {
        //! Don't change the tests in the main method!
        Calculator calc = new Calculator();

        System.out.println("Addition: " + calc.add(5, 3));
        System.out.println("Subtraction: " + calc.subtract(5, 3));
        System.out.println("Multiplication: " + calc.multiply(5, 3));
        System.out.println("Division: " + calc.divide(5, 3));
    }

    // Addition method
    public double add(double num1, double num2) {
        return num1 + num2;
    }

    // Subtraction method
    public double subtract(double num1, double num2) {
        return num1 - num2;
    }

    // Multiplication method
    public double multiply(double num1, double num2) {
        return num1 * num2;
    }

    // Division method
    public double divide(double num1, double num2) {
        if (num2 != 0) {
            return num1 / num2;
        } else {
            System.out.println("Error: Division by zero");
            return Double.NaN;
        }
    }


}
