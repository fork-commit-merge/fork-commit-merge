# Python - Medium

def bubble_sort(arr):
    # TODO: Implement the bubble sort algorithm
    for i in range(0, len(arr)):
        for j in range(i+1, len(arr)):
            if arr[i] >= arr[j]:
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
    
    return arr

#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
