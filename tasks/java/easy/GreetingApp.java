// Java - Easy

public class GreetingApp {

    public static void main(String[] args) {
        // TODO: Implement a Simple Greeting Application
        Scanner scanner = new Scanner(System.in);
        
        // Prompt the user for their name
        System.out.print("Enter your name: ");
        String name = scanner.nextLine(); // Read user input
        
        // Greet the user
        System.out.println("Hello, " + name + "! Welcome to the Greeting Application!");
        
        // Close the scanner
        scanner.close();
    }
}

    
