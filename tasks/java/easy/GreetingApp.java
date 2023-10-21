// Java - Easy

public class GreetingApp {

    public static void main(String[] args) {
        
        System.out.println("Enter your name:");
        Scanner scanner = new Scanner(System.in);
        String name = scanner.next();
        scanner.close();
        greetUser(name);
    }

    public static void greetUser(String name){

        System.out.println("Hi there, " + name);
    }

    }
}
