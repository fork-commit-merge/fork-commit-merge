// Java - Easy
import java.util.Scanner;

public class GreetingApp {

    public static void main(String[] args) {
        // TODO: Implement a Simple Greeting Application
        Scanner userScannerObj = new Scanner(System.in);
        System.out.println("Enter your name: ");

        String username = userScannerObj.nextLine();
        System.out.println("Hello, " + username + "!nice to meet you!");

        userScannerObj.close();

    }
}
