def bubble_sort(arr):
    """
    Sorts the given list in ascending order using the bubble sort algorithm.
    
    Args:
        arr (list): The list to be sorted in-place
    """
    n = len(arr)
    # Optimized bubble sort with early exit if no swaps are made
    for i in range(n):
        swapped = False
        # Last i elements are already in place
        for j in range(0, n-i-1):
            # Traverse the array from 0 to n-i-1
            # Swap if current element is greater than next
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        
        # If no two elements were swapped in inner loop, array is sorted
        if not swapped:
            break

#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)

# Additional test cases
arr2 = [5, 1, 4, 2, 8]
print("\nTest case 2:")
print("Original array:", arr2)
bubble_sort(arr2)
print("Sorted array:", arr2)

arr3 = [1, 2, 3, 4, 5]  # Already sorted
print("\nTest case 3 (already sorted):")
print("Original array:", arr3)
bubble_sort(arr3)
print("Sorted array:", arr3)

arr4 = [5, 4, 3, 2, 1]  # Reverse sorted
print("\nTest case 4 (reverse sorted):")
print("Original array:", arr4)
bubble_sort(arr4)
print("Sorted array:", arr4)
