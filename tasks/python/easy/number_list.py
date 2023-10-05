# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):
    print(numbers)
    print(f'Sum: {sum(numbers)}')

if __name__ == "__main__":
    nums = [1,2,3,4,5,6,7,8,9,10]
    function(nums)
