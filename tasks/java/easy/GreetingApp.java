// Java - Easy

import java.util.Scanner;

public class GreetingApp {
    
    static void greet(String name){
    	System.out.println("Hello " + name + "!");
    }
    
    public static void main(String[] args) {
        // TODO: Implement a Simple Greeting Application
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name : ");
        greet(sc.nextLine());
    }
}
