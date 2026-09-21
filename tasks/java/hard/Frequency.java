// Java - Hard
import java.util.HashMap;
import java.util.Map;
public class Frequency {

    public static void main(String[] args) {
        int[] numbers = {2, 3, 2, 5, 6, 3, 1};
        HashMap<Integer, Integer> frequency = new HashMap<>();
        for (Integer n: numbers) {
            frequency.put(n, frequency.getOrDefault(n, 0) + 1);
        }
        System.out.println(frequency);
    }
}
