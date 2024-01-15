# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):

    print("List: ", numbers)
    the_sum = sum(numbers)
    print("Sum: ", the_sum)


# creating my list and calling the function
natural_numbers = list(range(1, 11))
function(natural_numbers)
