// Java - Medium

package tasks.java.medium;

public class Calculator {
    // TODO: Implement the Calculator class

    public int add(int val1, int val2){
        return val1+val2;
    }

    public int subtract(int val1, int val2){
        return val1-val2;
    }

    public int multiply(int val1, int val2){
        return val1*val2;
    }

    public int divide(int val1, int val2){
        return val1/val2;
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

