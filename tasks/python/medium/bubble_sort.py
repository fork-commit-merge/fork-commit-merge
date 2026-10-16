def bubble_sort(arr):
  for i in range(0, len(arr)):
    swap = False
    for j in range(0, len(arr)-1-i):
      if (arr[j] > arr[j+1]):
        arr[j],arr[j+1] = arr[j+1], arr[j]
        swap = True
    if not swap:
      break
  return arr

#! Test cases (Don't edit):
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)

bubble_sort(arr)
print("Sorted array:", arr)
