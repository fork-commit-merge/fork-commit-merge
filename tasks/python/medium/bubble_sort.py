def bubble_sort(arr):
    # TODO: Implement the bubble sort algorithm
    for loop in range(len(arr)-1):
        switch = False
        for item in range(len(arr)-loop-1):
            if arr[item] > arr[item+1]:
                arr[item], arr[item+1] = arr[item+1], arr[item]
                switch = True
        if not switch:
            break
    return arr

#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
# print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)