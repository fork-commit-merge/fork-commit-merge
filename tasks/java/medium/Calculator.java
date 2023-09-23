public class Calculator {
    public double add(int a, int b){
        return (double)(a+b);
    }
    public double subtract(int a, int b){
        return (double)(a-b);
    }
    public double multiply(int a, int b){
        return (double)(a*b);
    }
    public double divide(int a, int b){
        return (double)a/b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();

        System.out.println("Addition: " + calc.add(5, 3));
        System.out.println("Subtraction: " + calc.subtract(5, 3));
        System.out.println("Multiplication: " + calc.multiply(5, 3));
        System.out.println("Division: " + calc.divide(5, 3));
    }
}

