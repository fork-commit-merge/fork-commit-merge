# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):
    natural_numbers = []
    for number in range(numbers+1):
        natural_numbers.append(number)
    print(natural_numbers)
    print(f"Sum of first {numbers} natural numbers is {sum(natural_numbers)}")

function(10)