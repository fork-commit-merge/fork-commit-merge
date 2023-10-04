// Java - Medium

package tasks.java.medium;

public class Calculator {
    // TODO: Implement the Calculator class
private int add(int a, int b) {
		return a+b;
	}
	private int subtract(int a, int b) {
		if(a>b)
			return a-b;
		else
			return b-a;
	}
	private int multiply(int a, int b) {
		return a*b;
	}
	private double divide(int a, int b) {
		if(a>b)
			return a/b;
		else
			return b/a;
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

