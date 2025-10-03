// Java - Easy

import java.util.Scanner;

public class GreetingApp {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter your name:");
        String name = scanner.nextLine();
        System.out.println("Hello, " + name + "! WElcome to greetingsApp.");
        scanner.close();
    }
}
