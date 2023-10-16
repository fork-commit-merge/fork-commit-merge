# Python - Medium

def bubble_sort(arr):
    # TODO: Implement the bubble sort algorithm
    for i in range(len(arr)):
        for j in range(len(arr) - i - 1):
            if arr[i] > arr[j + 1]:
                arr[j], arr[i] = arr[i], arr[j]
    return arr

#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
