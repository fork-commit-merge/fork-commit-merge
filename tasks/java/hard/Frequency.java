// Java - Hard
import java.util.HashMap;
import java.util.Map;
public class Frequency {

    public static void main(String[] args) {
        // TODO: Given an array of integers, write a Java program to find the frequency of each element using a Map
        Map<Integer, Integer> frequency = new HashMap<>();

        for (String s : args) {
            int num = Integer.parseInt(s);
            Integer count = frequency.get(num);
            if (count == null) {
                frequency.put(num, 1);
            } else {
                frequency.put(num, count + 1);
            }
        }

        System.out.println(frequency);
    }
}
