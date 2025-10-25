// Java - Easy

public class GreetingApp {

    public static void main(String[] args) {
        // Print a greeting message
        System.out.println("Hello, Java!");
        
        // If command line arguments are provided, greet the user
        if (args.length > 0) {
            System.out.println("Hello, " + args[0] + "!");
        }
    }
}
