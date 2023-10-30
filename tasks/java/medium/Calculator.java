package tasks.java.medium;

public class Calculator {
    public double add(double a, double b) {
        return a + b;
    }

    public double subtract(double a, double b) {
        return a - b;
    }

    public double multiply(double a, double b) {
        return a * b;
    }

    public double divide(double a, double b) {
        if (b == 0.0) {
            throw new ArithmeticException("Cannot divide by zero");
        }
        return a / b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();

        System.out.println("Addition: " + calc.add(5.0, 3.0));
        System.out.println("Subtraction: " + calc.subtract(5.0, 3.0));
        System.out.println("Multiplication: " + calc.multiply(5.0, 3.0));
        System.out.println("Division: " + calc.divide(5.0, 3.0));
    }
}
