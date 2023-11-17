# Python - Medium

def bubble_sort(arr):
    """
    Sorts an array in ascending order using the bubble sort algorithm.

    Parameters:
        arr (list): The list to be sorted.

    Returns:
        None: This function modifies the original list in place.
    """
    # Get the length of the array
    n = len(arr)

    # Iterate over the array, comparing adjacent elements
    for i in range(n):
        # Iterate from the beginning to the end of the unsorted portion
        for j in range(0, n-i-1):
            # If the current element is greater than the next element, swap them
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]


#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
