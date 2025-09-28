// Java - Hard
import java.util.HashMap;
import java.util.Map;
public class Frequency {

    public static void main(String[] args) {
        // TODO: Given an array of integers, write a Java program to find the frequency of each element using a Map
        int[] array = {1, 2, 3, 4, 2, 1, 3, 5, 5, 6, 7, 7};
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : array) {
            if (map.containsKey(num)) {
                map.put(num, map.get(num) + 1);
            } else {
                map.put(num, 1);
            }
        }
        System.out.println(map);
    }
}
