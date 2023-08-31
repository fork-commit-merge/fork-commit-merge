
// Java - Easy
import java.util.Scanner;

public class GreetingApp {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your name : ");
        String name = sc.nextLine();
        System.out.println(String.format("Hello %s ! Nice to meet you!", name));
        sc.close();
    }
}
