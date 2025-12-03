
// Java - Hard
import java.util.HashMap;
import java.util.Map;

public class Frequency {

    public static void main(String[] args) {

        int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 9, 3, 2, 2, 3, 4, 5 };
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        for (int nums : numbers) {
            // getOrDefault() returns actual value or defaultValue if it is not mapped
            frequencyMap.put(nums, frequencyMap.getOrDefault(nums, 0) + 1);
        }
        System.out.println(frequencyMap);
    }
}
