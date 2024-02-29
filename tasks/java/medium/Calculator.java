package tasks.java.medium;

public class Calculator {
    // TODO: Implement the Calculator class

    public int add(int a, int b) {
        // TODO: Implement addition logic
        return a + b;
    }

    public int subtract(int a, int b) {
        // TODO: Implement subtraction logic
        return a - b;
    }

    public int multiply(int a, int b) {
        // TODO: Implement multiplication logic
        return a * b;
    }

    public double divide(int a, int b) {
        // TODO: Implement division logic
        if (b == 0) {
            throw new ArithmeticException("Cannot divide by zero");
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
