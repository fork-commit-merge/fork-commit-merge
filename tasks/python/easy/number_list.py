# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):
    numList = [i+1 for i in range(0,numbers)]
    print("List:", numList)
    print("Sum:", sum(numList))
    
function(10)
