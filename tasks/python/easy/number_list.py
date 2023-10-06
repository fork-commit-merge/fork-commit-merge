# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def sum():
    numbers = []
    sum = 0
    for i in range(1,11):
        numbers.append(i)
        sum = sum + i
    
    print(numbers)
    print(sum)

sum()