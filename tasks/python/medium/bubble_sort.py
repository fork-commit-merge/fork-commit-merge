# Python - Medium

def bubble_sort(arr):
    for x in range(len(arr)):
        for y in range(0, len(arr) - x - 1, 1):
            if arr[y] > arr[y + 1]:
                temp = arr[y]
                arr[y] = arr[y + 1]
                arr[y + 1] = temp

#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
