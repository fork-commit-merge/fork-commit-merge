// Java - Hard
import java.util.HashMap;
import java.util.Map;


public class Frequency {

    public static void main(String[] args) {
        // TODO: Given an array of integers, write a Java program to find the frequency of each element using a Map
        Map<Integer,Integer> frequencyMap = new HashMap<Integer,Integer>();
        int[] array = {1, 2, 2, 3, 1, 1, 2};

        for (int num:array) {
            System.out.println("key > " + num + " value > " + (frequencyMap.getOrDefault(num,0) + 1));
            frequencyMap.put(num,frequencyMap.getOrDefault(num,0) + 1);

        }

        System.out.println(frequencyMap);
    }
}
