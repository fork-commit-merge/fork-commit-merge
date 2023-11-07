
# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):
    print("List of numbers:", numbers)
    sum_of_numbers = sum(numbers)
    print("Sum of numbers:", sum_of_numbers)

numbers = list(range(1, 11))
function(numbers)