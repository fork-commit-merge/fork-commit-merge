# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):
    natural_numbers = list(range(1, 11)) #Generates a list of the first 10 natural numbers
    print("Natural Numbers: ", natural_numbers) #Prints the list of natural numbers

    total_sum = sum(natural_numbers) #The sum of the numbers inside the list
    print("Sum of the first 10 natural numbers: ", total_sum) #Prints the sum

function(None) #Calls the function with no arguments
