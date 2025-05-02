// Java - Hard
import java.util.HashMap;

public class Frequency {

    public static void main(String[] args) {
        // TODO: Given an array of integers, write a Java program to find the frequency of each element using a Map

    	int [] array = {1, 2, 2, 2, 5, 6 ,2, 6, 8, 9};
    	var map = new HashMap<Integer, Integer>();

     	for(int i = 0; i < array.length; i++) {
    		map.putIfAbsent(array[i], 0);
    		map.put(array[i], map.get(array[i]) + 1);
    	}
     	
    	map.forEach((k, v) -> {
    		System.out.println(k + ": " + v);
    	});
    }
}
