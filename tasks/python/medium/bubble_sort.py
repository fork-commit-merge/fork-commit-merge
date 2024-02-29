def bubble_sort(arr):
    n = len(arr)
    swapped = False

    for i in range(n-1):

        for j in range(n-i-1):

            if arr[j] > arr[j+1]:
                swapped = True
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

        if not swapped:
            return

arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
