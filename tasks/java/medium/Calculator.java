// Java - Medium

package tasks.java.medium;

public class Calculator {
    // TODO: Implement the Calculator class
    public int add(int a, int b) {
        return a + b;
    }

    // Implement the subtract method
    public int subtract(int a, int b) {
        return a - b;
    }

    // Implement the multiply method
    public int multiply(int a, int b) {
        return a * b;
    }

    // Implement the divide method
    public double divide(int a, int b) {
        if (b == 0) {
            System.out.println("Division by zero is not allowed.");
            return Double.NaN;
        }
        return (double) a / b;
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
