# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):
    """
    Function that prints the list of numbers and their sum
    
    Args:
        numbers: list of numbers to process
    """
    print("List of numbers:", numbers)
    total_sum = sum(numbers)
    print("Sum of numbers:", total_sum)
    return total_sum

# Create list of first 10 natural numbers (1 to 10)
natural_numbers = list(range(1, 11))

# Test the function
if __name__ == "__main__":
    print("First 10 natural numbers:")
    result = function(natural_numbers)
