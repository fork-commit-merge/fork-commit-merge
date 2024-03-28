import java.util.Scanner;

public class GreetingApp {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter your name: "); // input from user
		String name = scanner.nextLine();

		System.out.println("Hello, " + name + "! Nice to meet you!"); // 인사말 출력
	}
}
