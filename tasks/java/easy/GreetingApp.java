// Java - Easy

import java.util.Scanner;

public class GreetingApp {

    public static void main(String[] args) {
        // TODO: Implement a Simple Greeting Application

        // Create a Scanner object to read user input
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for their name
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        // Greet the user
        String greeting = generateGreeting(name);
        System.out.println(greeting);

        // Close the scanner to avoid resource leaks
        scanner.close();
    }

    // Function to generate a personalized greeting
    private static String generateGreeting(String name) {
        return "Hello, " + name + "! Welcome to the Greeting App.";
    }
}
