// Java - Medium

package tasks.java.medium;

public class Calculator {

    public static void main(String[] args) {
        //! Don't change the tests in the main method!
        Calculator calc = new Calculator();

        System.out.println("Addition: " + calc.add(5, 3));
        System.out.println("Subtraction: " + calc.subtract(5, 3));
        System.out.println("Multiplication: " + calc.multiply(5, 3));
        System.out.println("Division: " + calc.divide(5, 3));
    }

    public int add(int x, int y) {
        return x + y;
    }

    public int subtract(int x, int y){
        return x - y;
    }

    public int divide(int x, int y){
        return x / y;
    }

    public int multiply(int x, int y){
        return x * y;
    }
}
