// Java - Medium

package tasks.java.medium;

public class Calculator {
    // TODO: Implement the Calculator class
    public static float add(float a, float b){
        return a + b;
    }

    public static float subtract(float a, float b){
        return a - b;
    }

    public static float multiply(float a, float b){
        return a * b;
    }

    public static float divide(float a, float b){
        return a / b;
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
