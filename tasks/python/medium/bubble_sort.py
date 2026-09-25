def bubble_sort(arr):
    for number in range(len(arr)-1):
        for number in range(len(arr)-1):
            if arr[number] > arr[number + 1]:
                original_number = arr[number]
                arr[number] = arr[number+1]
                arr[number+1] = original_number
    return arr


#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
