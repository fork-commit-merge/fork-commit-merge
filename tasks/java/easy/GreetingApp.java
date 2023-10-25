// Java - Easy


import java.util.Scanner;

public class GreetingApp {
    public static void main(String[] args) {
        // Create a Scanner object to read user input.
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter their name.
        System.out.println("Enter your name: ");

        // Read the user's name.
        String name = scanner.nextLine();

        // Print a greeting using the provided name.
        System.out.println("Hello, " + name + "! Nice to meet you!");
    }
}
