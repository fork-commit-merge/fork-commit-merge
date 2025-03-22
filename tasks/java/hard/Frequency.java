// Java - Hard

import java.util.HashMap;
import java.util.Map;

public class Frequency {
    public static void main(String[] args) {
        Map<Integer, Integer> count = new HashMap<>();
        int[] array = {4, 2, 4, 3, 2, 4, 5, 1, 3, 2};

        
        for (int num : array) {
            count.put(num, count.getOrDefault(num, 0) + 1);
        }

        count.forEach((clave, valor) -> System.out.println(clave + " -> " + valor));
    }
}
