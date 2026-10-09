def bubble_sort(arr):
    # Sorts the list in place in ascending order using the bubble sort algorithm.
    n = len(arr)

    for i in range(n - 1):
        swapped = False

        # The last i elements are already in their sorted position.
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        # If no swaps happened, the list is already sorted.
        if not swapped:
            break

    return arr


#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
