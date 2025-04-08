def bubble_sort(arr):
    # TODO: Implement the bubble sort algorithm
    n = len(arr) - 1
    i = 0
    while i < n:
        for j in range(n - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
        i += 1
        
    return arr

#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
