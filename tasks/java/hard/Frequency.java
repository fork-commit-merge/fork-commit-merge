// Java - Hard

// TODO: Given an array of integers, write a Java program to find the frequency of each element using a Map
public class Frequency {
    /**
     * Finds and prints the frequency of each unique element in the given array of integers.
     *
     * This method iterates through the array and maintains a mapping of each unique element
     * to its frequency using a HashMap. It then prints the results, indicating how many times
     * each number appears in the array.
     *
     * @param nums An array of integers in which the frequency of each element needs to be found.
     */
    public void findFrequency(int[] nums) {
        Map<Integer, Integer> frequency = new HashMap<>();

        for (int i : nums) {
            if (!frequency.containsKey(i)) {
                frequency.put(i, 0);
            }

            frequency.put(i, frequency.get(i) + 1);
        }

        for (int key : frequency.keySet()) {
            System.out.println("number " + key + " appears " + frequency.get(key) + " time(s)");
        }
    }

    /**
     * The main entry point for the FrequencyCounter program.
     *
     * @param args
     */
    public static void main(String[] args) {
        int[] nums = {1, 2, 1, 3, 4, 6, 7, 3};

        Frequency frequency = new Frequency();
        frequency.findFrequency(nums);
    }
}