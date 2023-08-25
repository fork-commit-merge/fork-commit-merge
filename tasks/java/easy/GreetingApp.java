// Java - Easy

import java.util.Scanner;

public class GreetingApp {

    public static void main(String[] args) {
        // Getting the scanner and then closing it afterwards
    	
    	Scanner ask = new Scanner(System.in);
    	System.out.println("What is your name: ");
    	String name = ask.nextLine();
    	ask.close();
    	
    	//putting the response in a string builder and then sending it out
    	StringBuilder output = new StringBuilder();
    	output.append("Hello ");
    	output.append(name);
    	output.append("! Nice to meet you.");
    	
    	System.out.println(output.toString());

    }
}
