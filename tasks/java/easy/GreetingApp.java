// Java - Easy

import java.util.Scanner;

public class GreetingApp {

    public static void main(String[] args) {
        Scanner sr = new Scanner(System.in);
        String name;
        System.out.println("Enter your name:");
        name = sr.nextLine();
        System.out.println("Hello, " + name + "!");

        sr.close();
    }
}
