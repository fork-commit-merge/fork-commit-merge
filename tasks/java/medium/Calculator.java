// Java - Medium

package tasks.java.medium;

public class Calculator {
    public double add(double number_1, double number_2) {
        return number_1 + number_2;
    }

    public double subtract(double number_1, double number_2) {
        return number_1 - number_2;
    } 

    public double multiply(double number_1, double number_2) {
        return number_1 * number_2;
    }

    public double divide(double number_1, double number_2) {
        return number_1 / number_2;
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
