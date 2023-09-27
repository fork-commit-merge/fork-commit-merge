# Python - Medium

def bubble_sort(arr):
    # TODO: Implement the bubble sort algorithm
    n = len(arr)
    for i in range(0,n):
        didswap=0
        for j in range(0,n-i-1):
            if(arr[j]>arr[j+1]):
                temp = arr[j]
                arr[j] =arr[j+1]
                arr[j+1] = temp
                didswap=1
        if didswap==0:
            break
    


    #! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
