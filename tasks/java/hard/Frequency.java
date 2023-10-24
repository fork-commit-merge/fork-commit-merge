// Java - Hard

package tasks.java.hard;
import java.util.*;

public class Frequency {
    public static void main(String[] args)
    {
        int arr[]={0,1,0,2,0,1,2,2,2,3,4,5};
        Map<Integer,Integer> frequency=new HashMap<>();
        for(int num: arr)
            {
                frequency.put(num, frequency.getOrDefault(num,0) +1);
            }
        for(Map.Entry<Integer,Integer> entry:frequency.entrySet())
            {
                System.out.println("Element: "+entry.getKey() +" occurs: " + entry.getValue() + " times");
            }
    }
    // TODO: Frequency Count - Given an array of integers, write a Java program to find the frequency of each element using a Map
}
