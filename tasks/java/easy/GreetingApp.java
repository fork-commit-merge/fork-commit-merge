// Java - Easy

import java.util.Scanner;

public class GreetingApp {

    public static void main(String[] args) {
        // TODO: Implement a Simple Greeting Application
        //create a scanner object to read user name
        Scanner sc = new Scanner(System.in);
    
        //prompt the user to enter name
        System.out.println("Enter your name: ");

        //read the user name as string
        String name = sc.nextLine();

        //closing scanner object
        sc.close();
        //print the message
        System.out.println("Hello, "+name+"! Nice to meet you!");
    }
}
