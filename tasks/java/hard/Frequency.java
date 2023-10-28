// Java - Hard

package tasks.java.hard;
import java.util.HashMap;
import java.util.Map;

public class Frequency {
    // TODO: Frequency Count - Given an array of integers, write a Java program to find the frequency of each element using a Map
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 2, 3, 5, 6, 1, 4, 1};
        Map<Integer, Integer> frequencyMap = calculateFrequency(array);

        // Print the frequency of each element
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println("Element: " + entry.getKey() + ", Frequency: " + entry.getValue());
        }
    }

    public static Map<Integer, Integer> calculateFrequency(int[] array) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        // Iterate through the array and count the frequency of each element
        for (int num : array) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        return frequencyMap;
    }
}


