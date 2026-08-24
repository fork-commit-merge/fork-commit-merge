// Java - Easy
import java.util.Scanner;
public class GreetingApp {

    public static void main(String[] args) {
        Scanner kb = new Scanner(System.in);
        String name;

        System.out.print("Enter your name: ");
        name = kb.nextLine();
        
        System.out.println("Hello " + name);
    }
}
