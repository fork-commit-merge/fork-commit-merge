package tasks.java.hard;

import java.util.HashMap;
import java.util.Map;

public class Frequency {
    // Function to find the frequency of each element in the array
    public static Map<Integer, Integer> findElementFrequency(int[] arr) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        // Iterate through the array
        for (int num : arr) {
            // Check if the element is already in the map
            if (frequencyMap.containsKey(num)) {
                // If it is, increment the frequency count
                int frequency = frequencyMap.get(num);
                frequencyMap.put(num, frequency + 1);
            } else {
                // If not, add it to the map with a frequency of 1
                frequencyMap.put(num, 1);
            }
        }

        return frequencyMap;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 1, 3, 1, 4, 5, 4};

        Map<Integer, Integer> frequencyMap = findElementFrequency(arr);

        // Print the frequency of each element
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println("Element: " + entry.getKey() + ", Frequency: " + entry.getValue());
        }
    }
}
