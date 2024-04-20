def bubble_sort(arr):
    arr_length = len(arr)
    for position in arr:
        index = 0
        while index < arr_length-1:
            if arr[index] < arr[index+1]:
                arr.insert(index,arr[index])
            if arr[index] > arr[index+1]:
                arr.insert(index+2,arr[index])
            arr.pop(index)
            index += 1 
    return arr

#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
