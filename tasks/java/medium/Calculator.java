// Java - Medium

package tasks.java.medium;

public class Calculator {
    // TODO: Implement the Calculator class
    float add(float a, float b)
    {
        return (a+b);
    }
    float subtract(float a,float b)
    {
        return (a-b);
    }
    float multiply(float a,float b)
    {
        return (a*b);
    }
    float divide(float a,float b)
    {
        return (a/b);
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
