def bubble_sort(arr):
    # TODO: Implement the bubble sort algorithm
    noswap = False
    while(not noswap):
        noswap = True
        for i in range(len(arr)-1):
            if arr[i] > arr[i+1]:
                noswap = False
                temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp


#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
