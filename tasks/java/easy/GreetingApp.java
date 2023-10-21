import java.util.Scanner;

public class GreetingApp {

    public static void main(String[] args) {
        // Implement a Simple Greeting Application
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String a = sc.nextLine();
        System.out.println("Hello, " + a + "! Nice to meet you!");
    }
}
