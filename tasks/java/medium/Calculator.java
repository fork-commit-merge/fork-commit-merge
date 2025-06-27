// Java - Medium

package tasks.java.medium;

public class Calculator {
    
	public double add(double i,double k)
	{
		double addition = i+k;
		return addition;
	}
	
	public double subtract(double i,double k)
	{
		double subtraction = i-k;
		return subtraction;
	}
	public double multiply(double i,double k)
	{
		double multiplication = i*k;
		return multiplication;
	}
	public double divide(double i,double k)
	{
		double division = i/k;
		return division;
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
