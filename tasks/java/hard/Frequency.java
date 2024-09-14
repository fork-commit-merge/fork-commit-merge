// Java - Hard

import java.util.HashMap;
import java.util.Map;

public class Frequency {

    public static void main(String[] args) {
        // TODO: Given an array of integers, write a Java program to find the frequency of each element using a Map
        int[] nums = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5};
        Map<Integer, Integer> freqs = new HashMap<>();

        for (int num : nums) {
            // If the element is already present in the map, increase its count
            if (freqs.containsKey(num)) {
                freqs.put(num, freqs.get(num) + 1);
            } else {
                // Otherwise, add the element with a count of 1
                freqs.put(num, 1);
            }
        }
        for (Map.Entry<Integer, Integer> entry : freqs.entrySet()) {
            System.out.println(+ entry.getKey() + ": " + entry.getValue());
        }
    }
}
