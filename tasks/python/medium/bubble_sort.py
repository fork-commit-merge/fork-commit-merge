def bubble_sort(arr):
    n = len(arr)
    # Traverse through all array elements
    for i in range(n):
        for j in range(0, n-i-1):
            # Traverse the array from 0 to n-i-1 as last i elements are already in place
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
