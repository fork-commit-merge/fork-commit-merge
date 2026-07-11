// Java - Hard
import java.util.HashMap;
import java.util.Map;
public class Frequency {

    public static void main(String[] args) {
        // TODO: Given an array of integers, write a Java program to find the frequency of each element using a Map
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        int [] arr = {1, 2, 3, 2, 1, 4, 5, 3, 2};

        for (int n : arr) {
            frequencyMap.put(n, frequencyMap.getOrDefault(n, 0) + 1);
        }

        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

    }
}