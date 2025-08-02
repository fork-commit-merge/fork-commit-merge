def bubble_sort(arr):
    n = len(arr)  # Get the length of the array
    for i in range(n):  
         for j in range(0, n - i - 1):  
            if arr[j] > arr[j + 1]:  # Compare adjacent elements
                arr[j], arr[j + 1] = arr[j + 1], arr[j]  # Swap if out of order
    

#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
