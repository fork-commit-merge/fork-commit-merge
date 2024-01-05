import java.util.HashMap;
import java.util.Map;

public class Frequency {

    public static void main(String[] args) {
        int[] array = {10, 20, 20, 30, 10, 10, 20};  // Sample array for demonstration

        Map<Integer, Integer> frequencyMap = new HashMap<>();

        for (int num : array) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        // Print the frequency of each element
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println("Element " + entry.getKey() + " occurs " + entry.getValue() + " times");
        }
    }
}