# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):
    # Generate a list of the first 'number' natural numbers
    natural_number = list(range(1, numbers+1))
    # Print the list of natural numbers
    print("The first natural numbers are :", natural_number)
    # calculate the sum of the natural numbers 
    sumNum = sum(natural_number)
    # print the sum of the numbers
    print("The sum of the first", numbers, "numbers is :", sumNum)
# Call the function with 10 to list the first 10 natural number and their sum
function(10)

