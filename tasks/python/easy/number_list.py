# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def sum_of_first_10_natural_numbers():
    # Create a list of the first 10 natural numbers
    natural_numbers = list(range(1, 11))

    # Print the created list
    print("List of the first 10 natural numbers:", natural_numbers)

    # Calculate the sum of the numbers in the list
    list_sum = sum(natural_numbers)

    # Print the sum of the numbers
    print("Sum of the numbers in the list:", list_sum)
    

sum_of_first_10_natural_numbers()