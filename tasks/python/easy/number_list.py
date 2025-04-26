# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list


def process_natural_numbers():
    """Generates the first 10 natural numbers, prints the list, and prints their sum."""

    natural_numbers = list(range(1, 11))  # Generate numbers from 1 to 10
    print("The first 10 natural numbers are:", natural_numbers)
    sum_of_numbers = sum(natural_numbers)
    print("The sum of these numbers is:", sum_of_numbers)

# Calling the function
process_natural_numbers()