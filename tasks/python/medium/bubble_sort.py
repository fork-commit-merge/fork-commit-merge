def bubble_sort(arr):
    # TODO: Implement the bubble sort algorithm
    n = len(arr)

    for i in range(n): # for each item on the list arr (n)
        swapped = False

        for j in range(n - i - 1):

            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
            swapped = True

        if not swapped:
            break
    return arr


#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)

