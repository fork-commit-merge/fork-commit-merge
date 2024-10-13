// Java - Hard

import java.util.HashMap;
import java.util.Map;

public class Frequency {

    public static void main(String[] args) {
        // TODO: Given an array of integers, write a Java program to find the frequency of each element using a Map
        int[] array = {1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 5};
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        for(int num: array){
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        for(Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()){
            System.out.println(entry.getKey() +  ":" + entry.getValue());
        }
    }
}
