def bubble_sort(arr):
  # inital info
  n = len(arr)

  for i in range(n - 1):
    is_sorted = True

    # putting the (i + 1) largest element at (n - i - 1) position
    for j in range(n - i - 1):
      if arr[j] > arr[j + 1]:
        arr[j], arr[j + 1] = arr[j + 1], arr[j]
        is_sorted = False
	
		# since this prefix is sorted, its subprefixes too hence we don't need to check further
    if is_sorted: 
      break

	#sorted arr
  return arr

# Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
