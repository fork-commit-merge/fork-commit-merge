import java.util.HashMap;
import java.util.Map;

public class Frequency {

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 1, 4, 1, 5, 3, 2, 4, 4};

        Map<Integer, Integer> freqMap = new HashMap<>();

        // Count frequencies
        for (int num : arr) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }

        // Print frequencies
        for (Map.Entry<Integer, Integer> entry : freqMap.entrySet()) {
            System.out.println(entry.getKey() + " → " + entry.getValue());
        }
    }
}
