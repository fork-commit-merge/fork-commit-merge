// Java - Easy
import java.util.*;
public class GreetingApp {

    public static void main(String[] args) {
        // TODO: Implement a Simple Greeting Application

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = sc.nextLine();

        System.out.println("Hello, "+name+ "! Nice to meet you!");
    }
}
