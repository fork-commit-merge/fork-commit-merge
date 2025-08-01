
// Java - Hard
import java.util.HashMap;
import java.util.Map;

public class Frequency {

    public static void main(String[] args) {
        // TODO: Given an array of integers, write a Java program to find the frequency of each element using a Map

        int[] arr = { 2, 4, 1, 5, 2, 4, 5, 1, 7, 4 }; // array example should output ==> {1=2, 2=2, 4=3, 5=2, 7=1}

        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < arr.length; i++) {
            if (map.containsKey(arr[i])) {
                map.put(arr[i], map.get(arr[i]) + 1);
            } else {
                map.put(arr[i], 1);
            }
        }

        System.out.println(map);
    }
}
