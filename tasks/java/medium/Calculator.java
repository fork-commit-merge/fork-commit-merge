// Java - Medium

package tasks.java.medium;

public class Calculator {
    // TODO: Implement the Calculator class

    //addition method

    public static double add(double num1, double num2){
        return num1 + num2;
    }

    //subtraction method
    public static double subtract(double num1, double num2){
        return num1 - num2;
    }

    //multiplication method
    public static double multiply(double num1, double num2){
        return num1 * num2;
    }

    //division method
    public static double divide(double num1, double num2){
        if(num2 == 0){
            throw new ArithmeticException("Division by zero is not allowed");
        }
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

