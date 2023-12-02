// Java - Easy

import java.util.Scanner;

public class GreetingApp {

    public static void main(String[] args) {
        // TODO: Implement a Simple Greeting Application

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter you name: ");
        String name = sc.nextLine();

        System.out.println("Hello, "+ name + "!" +" Nice to meet you!"); //Hello, John! Nice to meet you!
        sc.close();
    }
}
