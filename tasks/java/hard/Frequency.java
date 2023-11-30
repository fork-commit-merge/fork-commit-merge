// Java - Hard

import java.util.HashMap;
import java.util.Map;

public class Frequency {

    public static void main(String[] args) {
        int[] array = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4}; // Example array
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        for (int number : array) {
            frequencyMap.put(number, frequencyMap.getOrDefault(number, 0) + 1);
        }

        // Printing the frequency of each element
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println("Element: " + entry.getKey() + ", Frequency: " + entry.getValue());
        }
    }
}
