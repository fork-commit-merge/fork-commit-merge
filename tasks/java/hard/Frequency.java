// Java - Hard
import java.util.HashMap;
import java.util.Map;
public class Frequency {

    public static void main(String[] args) {
        // Given an array of integers
        int[] nums = {1, 2, 2, 3, 3, 3, 4};

        // Create a Map to store the frequency of each element
        Map<Integer, Integer> freqMap = new HashMap<>();

        // Iterate through the array and count the frequency of each number
        for (int num : nums) {
            // If the number already exists in the map, increment its count
            // Otherwise, initialize its count to 1
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }

        // Iterate through the map entries and print the frequency of each element
        for (Map.Entry<Integer, Integer> entry : freqMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
