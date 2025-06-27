// Java - Hard
import java.util.HashMap;
import java.util.Map;
public class Frequency {

    public static void main(String[] args) {
        
    	int[] numbers= {1,2,2,3,3,4,4,4,5,6};
    	
    	Map<Integer, Integer> frequencyMap = new HashMap<Integer, Integer>();
    	
    	for (int number : numbers) {
			if(frequencyMap.containsKey(number)) {
				frequencyMap.put(number, frequencyMap.get(number)+1);
			}
			else
			{
				frequencyMap.put(number, 1);
			}
		}

    	frequencyMap.forEach((key, value) -> 
        System.out.println(key + "	-->	" + value + " times")
    	);
    	
    }
}
