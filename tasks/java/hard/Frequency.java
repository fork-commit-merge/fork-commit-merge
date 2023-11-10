import java.util.HashMap;
import java.util.Map;

public class ElementFrequency {

    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 2, 1, 3, 5, 5, 6, 7, 7};

        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : array) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        //kanye tha goat no cap
        System.out.println("Element's freq:");
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue() + " times");
        }
    }
}
