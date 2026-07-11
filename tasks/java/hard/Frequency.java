// Java - Hard
import java.util.HashMap;
import java.util.Map;
public class Frequency {

    public static void main(String[] args) {
        // TODO: Given an array of integers, write a Java program to find the frequency of each element using a Map
        int[] arr= {1,2,3,2,1,4,2};
        Map<Integer,Integer> map= new HashMap<>();
        for(int num: arr){
            map.put(num,map.getOrDefault(num,0)+1);
        }
        System.out.println(map);
    
    
    
    
    }
}
