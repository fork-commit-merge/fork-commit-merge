// Java - Hard
import java.util.HashMap;
import java.util.Map;
public class Frequency {

    public static void main(String[] args) {
        // TODO: Given an array of integers, write a Java program to find the frequency of each element using a Map

        int[] array = {1, 2, 3, 2, 1, 3, 4, 5, 4, 2, 1};

        // Create a HashMap to store elements and their frequencies
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        // Iterate through the array
        for (int num : array) {
            // If the number is already in the map, increment its count
            if (frequencyMap.containsKey(num)) {
                frequencyMap.put(num, frequencyMap.get(num) + 1);
            }
            // Otherwise, add the number to the map with count 1
            else {
                frequencyMap.put(num, 1);
            }
        }

        // Print the frequency of each element
        System.out.println("Element frequencies:");
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue() + " times");
        }
    }
}
