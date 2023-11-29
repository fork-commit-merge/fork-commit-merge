// Java - Medium

package tasks.java.medium;

public class Calculator {
    public int add(int number_1, int number_2) {
        return number_1 + number_2;
    }

    public float add(int number_1, float number_2) {
        return number_1 + number_2;
    } 

    public float add(float number_1, int number_2) {
        return number_1 + number_2;
    } 

    public float add(float number_1, float number_2) {
        return number_1 + number_2;
    }

    public int subtract(int number_1, int number_2) {
        return number_1 - number_2;
    }

    public float subtract(int number_1, float number_2) {
        return number_1 - number_2;
    } 

    public float subtract(float number_1, int number_2) {
        return number_1 - number_2;
    } 

    public float subtract(float number_1, float number_2) {
        return number_1 - number_2;
    }

    public int multiply(int number_1, int number_2) {
        return number_1 * number_2;
    }

    public float multiply(int number_1, float number_2) {
        return number_1 * number_2;
    } 

    public float multiply(float number_1, int number_2) {
        return number_1 * number_2;
    } 

    public float multiply(float number_1, float number_2) {
        return number_1 * number_2;
    }

    public int divide(int number_1, int number_2) {
        return number_1 / number_2;
    }

    public float divide(int number_1, float number_2) {
        return number_1 / number_2;
    } 

    public float divide(float number_1, int number_2) {
        return number_1 / number_2;
    } 

    public float divide(float number_1, float number_2) {
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
