import java.util.*;

public class Frequency {

    public static void main(String[] args) {
        int[] numbers = { 2, 4, 5, 2, 6, 7, 4, 8, 2, 5, 4, 7, 9, 2 };

        // Create a Map to store the frequency of each element
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        // Calculate the frequency of each element in the array
        for (int num : numbers) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        // Display the frequency of each element
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println("Element: " + entry.getKey() + ", Frequency: " + entry.getValue());
        }
    }
}
