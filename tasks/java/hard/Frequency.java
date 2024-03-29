// Java - Hard

import java.util.HashMap;
import java.util.Map;

public class Frequency {

    public static void main(String[] args) {
        // TODO: Given an array of integers, write a Java program to find the frequency of each element using a Map

        int[] exampleArray = {1, 2, 3, 4, 5, 1, 2, 1, 3, 4, 5, 5, 5};

        Map<Integer, Integer> result = getFrequency(exampleArray);

        for (Map.Entry<Integer, Integer> entry : result.entrySet()) {
            System.out.println("Element: " + entry.getKey() + ", Frequency: " + entry.getValue());
        }
    }

    public static Map<Integer, Integer> getFrequency(int[] numberArray) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        for (int number : numberArray) {
            if (frequencyMap.containsKey(number)) {
                frequencyMap.put(number, frequencyMap.get(number) + 1);
            } else {
                frequencyMap.put(number, 1);
            }
        }

        return frequencyMap;

    }
}
