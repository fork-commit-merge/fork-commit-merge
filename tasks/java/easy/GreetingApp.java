// Java - Easy

public class GreetingApp {

    public static void main(String[] args) {
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        System.out.print("Please enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Hello, " + name + "Welcome to the Java world!");
        scanner.close();
    }
}
