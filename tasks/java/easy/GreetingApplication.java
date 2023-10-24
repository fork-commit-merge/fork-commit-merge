import java.util.Scanner;

public class GreetingApplication {
    public static void main(String[] args) {
        // Creating a Scanner object to read user input
        Scanner scanner = new Scanner(System.in);

        // Prompting the user to enter their name
        System.out.print("Enter your name: ");

        // Reading the user's name
        String name = scanner.nextLine();

        // Printing the greeting message
        System.out.println("Hello, " + name + "! Nice to meet you!");

        // Closing the scanner to prevent resource leak
        scanner.close();
    }
}
