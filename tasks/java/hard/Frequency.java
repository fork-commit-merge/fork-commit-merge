// Java - Hard

import java.util.HashMap;
import java.util.Map;

public class Frequency {

    public static void main(String[] args) {
        // Given an array of integers
        int[] numbers = {1, 2, 3, 1, 2, 3, 4, 5, 1, 2, 2};

        // Create a Map to store the frequency of each element
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        // Count the frequency of each element
        for (int num : numbers) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        // Print the frequency of each element
        System.out.println("Frequency of each element:");
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue() + " times");
        }
    }
}
