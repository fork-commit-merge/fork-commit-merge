import java.util.Scanner;

/**
 * A simple greeting application that asks for the user's name
 * and prints a personalized greeting.
 */
public class Greeting {
    public static void main(String[] args) {
        // Create a Scanner object to read input from the console
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter their name
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        // Close the scanner to prevent resource leak
        scanner.close();

        // Print the greeting message
        System.out.println("Hello, " + name + "! Welcome to the Java world.");
    }
}