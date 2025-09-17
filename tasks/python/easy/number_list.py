# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):
    numbers_list = list(range(1, 11))
    
    print("Numbers:", numbers_list)
    
    total = sum(numbers_list)
    print("Sum:", total)
    
    return numbers_list, total

function(None)

