import java.util.HashMap;
import java.util.Map;

public class Frequency {

    public static void main(String[] args) {
        // Example array
        int[] arr = {1, 2, 2, 3, 4, 4, 4, 5};

        // Create a HashMap to store frequencies
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        // Loop through the array
        for (int num : arr) {
            // If the number is already in the map, increment its count
            if (frequencyMap.containsKey(num)) {
                frequencyMap.put(num, frequencyMap.get(num) + 1);
            } else {
                // Otherwise, add the number with a count of 1
                frequencyMap.put(num, 1);
            }
        }

        // Print the frequencies
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println("Element " + entry.getKey() + " occurs " + entry.getValue() + " times.");
        }
    }
}
