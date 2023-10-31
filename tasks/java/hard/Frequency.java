import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Frequency {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter integers separated by spaces");

        Map<Integer, Integer> frequencyMap = new HashMap<>();

        while (scanner.hasNextInt()) {
            int element = scanner.nextInt();

            if (frequencyMap.containsKey(element)) {
                frequencyMap.put(element, frequencyMap.get(element) + 1);
            } else {
                frequencyMap.put(element, 1);
            }
        }

        scanner.close();

        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println("Element: " + entry.getKey() + ", Frequency: " + entry.getValue());
        }
    }
}
