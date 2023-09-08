# Python - Medium

def bubble_sort(arr):
    # TODO: Implement the bubble sort algorithm
    """This func implements bubble sort"""
    
    # starts from i=4, j=0, i-1 for each iteration
    for i in range(len(arr)-1, 0, -1):
        for j in range(i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
        

#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
