# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):
    count = 0
    for i in range(numbers):
        count += i
        print(i)
    print("Sum of the numbers: ", count)

if __name__ == '__main__':
    function(11)