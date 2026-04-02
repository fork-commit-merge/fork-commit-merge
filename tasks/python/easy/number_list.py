# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function():
    sum = 0
    numbers = []
    for x in range(10):
        numbers.append(x + 1)
        sum += x
    print(numbers)
    print(sum)

function()