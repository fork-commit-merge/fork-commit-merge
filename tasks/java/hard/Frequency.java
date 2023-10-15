// Java - Hard

package tasks.java.hard;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Frequency {
    public static void searchFrequency(int[] array){
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : array) {
            if (frequencyMap.containsKey(num)) {
                frequencyMap.put(num, frequencyMap.get(num) + 1);
            } else {
                frequencyMap.put(num, 1);
            }
        }
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println(" Number of occurrences of number" + entry.getKey() +":"+ entry.getValue());
        }
    }
}
