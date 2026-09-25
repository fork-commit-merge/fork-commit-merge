# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def print_numbers():
    natural_numbers = list(range(1, 11)) # Create a list of the first natural numbers.
    print(natural_numbers) # Print the list of natural_numbers
    print(sum(natural_numbers)) # Print the sum of the natural_numbers

print_numbers() 
