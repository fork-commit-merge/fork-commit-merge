//Java - easy
import java.util.Scanner;

public class GreetingApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        scanner.close();

        String greeting = generateGreeting(name);
        System.out.println(greeting);
    }

    public static String generateGreeting(String name) {
        return "Hello, " + name + "! Welcome to the Greeting Application!";
    }
}
