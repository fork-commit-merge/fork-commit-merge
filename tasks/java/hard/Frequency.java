// Java - Hard

import java.util.HashMap;
import java.util.Map;

public class Frequency {

    public static void main(String[] args) {
        int[] array = {1,2,1,1,2,2,3,3,4,4,5,5,5,1,1,3};
        Map<Integer, Integer> FreqMap = new HashMap<>();
        for ( int element : array){
            FreqMap.put(element, FreqMap.getOrDefault(element, 0)+1);

        }
        System.out.println("element : frequency");
        for ( Map.Entry<Integer, Integer> entry : FreqMap.entrySet()){
            System.out.println(entry.getKey()+ " : " + entry.getValue());
        }
        // TODO: Given an array of integers, write a Java program to find the frequency of each element using a Map
    }
}
