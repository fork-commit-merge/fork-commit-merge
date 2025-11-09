# bubble_sort_contribution.py
# Author: Siri Reddy
# Purpose: Example open-source contribution - Bubble Sort Algorithm

def bubble_sort(arr):
    """
    Sorts a list in ascending order using the Bubble Sort algorithm.
    """
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap elements
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr


if __name__ == "__main__":
    sample_data = [64, 34, 25, 12, 22, 11, 90]
    print("Original Array:", sample_data)
    sorted_data = bubble_sort(sample_data)
    print("Sorted Array:", sorted_data)
