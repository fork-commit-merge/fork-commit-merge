def bubble_sort(arr):
    n = len(arr)
    
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            '''traverse from index 0 to n-i-1, then swap using tuple unpacking'''
            # Swap/reassign using tuple unpacking
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
            
        if not swapped:
            '''if no swap then, break out of outer loop because arr is sorted'''
            break
        

arr = [64, 25, 12, 22, 11]
print("Original array:", arr)
bubble_sort(arr)
print("Sorted array:", arr)
