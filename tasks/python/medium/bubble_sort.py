def bubble_sort(arr):
    n = len(arr)
    if n <=1:
        return 
    for i in range(1,n):
        for j in range(0,n-i):
            if arr[j] > arr[j+1]:
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1]= temp

#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
