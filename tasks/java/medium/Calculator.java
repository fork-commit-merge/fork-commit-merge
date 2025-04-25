// Java - Medium

package tasks.java.medium;

public class Calculator {
  // TODO: Implement the Calculator class

  public static void main(String[] args) {
    // ! Don't change the tests in the main method!
    Calculator calc = new Calculator();

    System.out.println("Addition: " + calc.add(5, 3));
    System.out.println("Addition: " + calc.add(5.0, 3.0));
    // System.out.println("Subtraction: " + calc.subtract(5, 3));
    // System.out.println("Multiplication: " + calc.multiply(5, 3));
    // System.out.println("Division: " + calc.divide(5, 3));
  }

  public double add(int num1, int num2) {
    return (double) (num1 + num2);
  }

  public double add(double num1, double num2) {
    return num1 + num2;
  }
}
