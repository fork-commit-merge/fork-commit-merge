# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):
    # Create a list of the first 10 natural numbers
    natural_numbers = list(range(1, 11))
    
    # Print the list to the console
    print("List of the first 10 natural numbers:", natural_numbers)
    
    # Calculate the sum of the numbers in the list
    total_sum = sum(natural_numbers)
    
    # Print the sum to the console
    print("Sum of the first 10 natural numbers:", total_sum)
