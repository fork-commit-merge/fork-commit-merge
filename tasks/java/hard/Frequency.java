// Java - Hard

package tasks.java.hard;

import java.util.HashMap;
import java.util.Map;

public class Frequency {
    // TODO: Frequency Count - Given an array of integers, write a Java program to find the frequency of each element using a Map
    public void countFreq(int arr[], int n)
    {
        Map<Integer, Integer> mp = new HashMap<>();

        for (int i = 0; i < n; i++)
        {
            if (mp.containsKey(arr[i])) mp.put(arr[i], mp.get(arr[i]) + 1);
            else mp.put(arr[i], 1);
        }

        for (Map.Entry<Integer, Integer> entry : mp.entrySet()) {
            System.out.println(entry.getKey() + " " + entry.getValue());
        }
    }
    
    public static void main(String []args)
    {
        Frequency demo = new Frequency();
        int arr[] = new int[]{ 10, 20, 20, 10, 10, 20, 5, 20 };
        int n = arr.length;
        demo.countFreq(arr, n);
    }
}
