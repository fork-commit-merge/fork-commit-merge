# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):
    """Calculate the sum of a list of numbers."""
    return sum(numbers)

# Create a list of the first 10 natural numbers (1 through 10)
numbers = list(range(1, 11))

# Print the list
print("List of numbers:", numbers)

# Calculate and print the sum
total = function(numbers)
print("Sum of numbers:", total)
