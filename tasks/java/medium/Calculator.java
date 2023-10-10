import java.util.*;
public class Calculator{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        float a= sc.nextFloat();
        float b= sc.nextFloat();
        float sum= a+b;
        float difference= a-b;
        float multiply= a*b;
        float divide = a/b;
        System.out.println("Addition: "+ sum);
        System.out.println("Difference: "+ difference);
        System.out.println("Multiply: "+ multiply);
        System.out.println("Divide: "+ divide);
        
        }
    }
