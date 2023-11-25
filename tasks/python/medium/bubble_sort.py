# Python - Medium

def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if arr[i]>arr[j]:
                arr[i], arr[j]= arr[j], arr[i]

#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
