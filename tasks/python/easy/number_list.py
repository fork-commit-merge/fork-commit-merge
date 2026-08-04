# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

import numbers


def function(numbers):
    print(numbers)
    print(sum(numbers))

numbers = list(range(1, 11))

print(function(numbers))