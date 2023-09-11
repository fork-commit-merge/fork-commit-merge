
import java.util.Scanner;
public class GreetingProgram {



        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            System.out.print("Please enter your name: ");

            String name = scanner.nextLine();

            scanner.close();

            System.out.println("Hello, " + name + "! Nice to meet you!");
        }
    }


