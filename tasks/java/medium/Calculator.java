// Java - Medium

package tasks.java.medium;

public class Calculator {
    // TODO: Implement the Calculator class
    public double add (double num1,double num2){
        double sum = num1+num2;
        return sum;
    }
    public double subtract(double num1, double num2){
        double sub = num1-num2;
        return sub;
    }
    public double multiply(double num1, double num2){
        double mult = num1*num2;
        return mult;
    }

    public double divide(double num1,double num2){
        if (num2 == 0){
            System.out.println("Error: Division by 0 is not allowed");
            return -1;
        }
        double div = num1/num2;
        return div;
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

