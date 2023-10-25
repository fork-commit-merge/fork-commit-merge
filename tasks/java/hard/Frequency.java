// Java - Hard

package tasks.java.hard;

public class Frequency {
    // TODO: Frequency Count - Given an array of integers, write a Java program to find the frequency of each element using a Map

import java.util.*;

class GFG
{

	static void countFreq(int arr[], int n)
	{
		Map<Integer, Integer> mp = new HashMap<>();

		// Traverse through array elements and
		// count frequencies
		for (int i = 0; i < n; i++)
		{
			if (mp.containsKey(arr[i])) 
			{
				mp.put(arr[i], mp.get(arr[i]) + 1);
			} 
			else
			{
				mp.put(arr[i], 1);
			}
		}
		// Traverse through map and print frequencies
		for (Map.Entry<Integer, Integer> entry : mp.entrySet())
		{
			System.out.println(entry.getKey() + " " + entry.getValue());
		}
	}

	// Driver code
	public static void main(String args[]) 
	{
		int arr[] = {10, 20, 20, 10, 10, 20, 5, 20};
		int n = arr.length;
		countFreq(arr, n);
	}
}


}
