// Java - Easy

import java.util.Scanner;

public class GreetingApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter their name
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        // Print the greeting message
        System.out.println("Hello, " + name + "! Nice to meet you!");

        // Close the scanner to release resources
        scanner.close();
    }
}

