// Java - Medium

package tasks.java.medium;

public class Main{
    
    public static void main(String[] args) {
        //! Dont't change the tests in the main method!
        Calculator calc = new Calculator();

        System.out.println("Addition: " + calc.add(5, 3));
        System.out.println("Subtraction: " + calc.subtract(5, 3));
        System.out.println("Multiplication: " + calc.multiply(5, 3));
        System.out.println("Division: " + calc.divide(5, 3));
    }
    
}


class Calculator {
    // TODO: Implement the Calculator class
    public static int add(int a,int b){
        return (a+b);
    }
    public static int subtract(int a,int b){
        return (a-b);
    }
    public static int multiply(int a,int b){
        return (a*b);
    }
    public static double divide(int a,int b){
    return (double)(a/b);
}
}

    


