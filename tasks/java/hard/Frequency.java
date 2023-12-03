// Java - Hard
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
public class Frequency {

    public static Map<Integer, Integer> findFrequency(int[] arr) {
        // Create an empty map to store the frequencies
        Map<Integer, Integer> freqMap = new HashMap<>();

        // Loop through the array elements
        for (int num : arr) {
            // If the map already contains the element, increment its frequency by 1
            if (freqMap.containsKey(num)) {
                freqMap.put(num, freqMap.get(num) + 1);
            }
            // Otherwise, add the element to the map with frequency 1
            else {
                freqMap.put(num, 1);
            }
        }

        // Return the map of frequencies
        return freqMap;
    }
    public static void main(String[] args) {
        // TODO: Given an array of integers, write a Java program to find the frequency of each element using a Map
        // Create an array of integers
        int[] arr = {1, 2, 3, 4, 5, 1, 2, 3, 1, 2, 1};

        // Print the array
        System.out.println("Array: " + Arrays.toString(arr));

        // Call the findFrequency method and print the result
        Map<Integer, Integer> freqMap = findFrequency(arr);
        System.out.println("Frequencies: " + freqMap);
    }
}
