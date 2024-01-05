def bubble_sort(arr):
    # TODO: Implement the bubble sort algorithm
	l = len(arr)
	swap = False
	for n in range(l-1):
		for m in range(0, l-n-1):
			if arr[m] > arr[m+1]:
				swap = True
				arr[m], arr[m+1] = arr[m+1], arr[m]
		if not swap:
			return
#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
