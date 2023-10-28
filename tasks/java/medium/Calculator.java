// Java - Medium

package tasks.java.medium;

public class Calculator {
    // TODO: Implement the Calculator class

    public double add(double x, double y) {
        return x + y;
    }
    public double subtract(double x, double y) {
        return x - y;
    }
    public double multiply (double x, double y) {
        return x * y;
    }
    public double divide (double x, double y) {
        if (y==0) return -10000;
        return x / y;
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
