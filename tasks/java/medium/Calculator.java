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
    private int divide(int a, int b) {
        return (b != 0) ?  a/b : 0;
    }

    private int subtract(int a, int b) {
        return a-b;
    }

    private int multiply(int a, int b) {
        return a*b;
    }

    private int add(int a, int b) {
        return a+b;
    }
}
