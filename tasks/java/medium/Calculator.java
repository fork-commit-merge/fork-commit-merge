// Java - Medium

package tasks.java.medium;

public class Calculator {
    // TODO: Implement the Calculator class
    public static float add(float num1, float num2) {
        return num1 + num2;
    }
    public static float subtract(float num1, float num2) {
        return num1 - num2;
    }
    public static float multiply(float num1, float num2) {
        return num1 * num2;
    }
    public static float divide(float num1, float num2) {
        return num1 / num2;
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
