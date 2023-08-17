// Java - Easy 

import java.util.Scanner;

public class GreetingApp {

    public static void main(String[] args) {
        // TODO: Implement a Simple Greeting Application
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name:");
        String name = scanner.nextLine();
        System.out.println("Hello, " +name+ "! Nice to meet you!");
    }
}
