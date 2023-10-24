# Python - Medium

def bubble_sort(arr):
    # TODO: Implement the bubble sort algorithm
    for i in range(0, len(arr)-1):  
        for j in range(len(arr)-1):  
            if (arr[j] > arr[j+1]):  
                temp = arr[j]  
                arr[j] = arr[j+1]  
                arr[j+1] = temp  
    return arr

#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
