# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

# List of the first 10 natural numbers
numbers = list(range(1, 11))

def print_numbers_and_sum(nums):
    # Print each number
    for n in nums:
        print(n)
    # Print the sum
    print("Sum:", sum(nums))

print_numbers_and_sum(numbers)
