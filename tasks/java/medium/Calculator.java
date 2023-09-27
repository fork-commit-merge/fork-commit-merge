// Java - Medium

package tasks.java.medium;

public class Calculator {
    // TODO: Implement the Calculator class

    public static void main(String[] args) {
        //! Dont't change the tests in the main method!
        Calculator calc = new Calculator();

        System.out.println("Addition: " + calc.add(5, 3));
        System.out.println("Subtraction: " + calc.subtract(5, 3));
        System.out.println("Multiplication: " + calc.multiply(5, 3));
        System.out.println("Division: " + calc.divide(5, 3));
    }

    private double add(int i, int j) {
        return i + j;
    }

    private double subtract(int i, int j) {
        return i - j;
    }

    private double multiply(int i, int j) {
        return i * j;
    }

    private double divide(int i, int j) {
        return i/(double)j;
    }
}

