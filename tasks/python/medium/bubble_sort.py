def bubble_sort(arr):
    """
    Sorts array using bubble sort algorithm and returns the result.
    
    Args:
        arr (list): List of numbers to be sorted.
        
    Returns:
        list: Sorted list in ascending order.
    """
    n = len(arr)
    for i in range(n - 1, 0, -1):
        swap = False
        for j in range(i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swap = True
        if not swap:
            break

#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
