# Python - Medium

def bubble_sort(arr):
    n = len(arr)
  
    # Traverse through all elements in the list
    for i in range(n):
        # Last i elements are already sorted, so we skip them
        for j in range(0, n-i-1):
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
