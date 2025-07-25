# Python - Easy

# TODO: Write a function that returns the sum of two numbers

def sum_two_numbers(a, b):
    """
    Function that returns the sum of two numbers.
    
    Args:
        a: First number
        b: Second number
    
    Returns:
        The sum of a and b
    """
    return a + b

# Demonstrate the function with example usage
if __name__ == "__main__":
    # Test with different number combinations
    num1 = 5
    num2 = 3
    result = sum_two_numbers(num1, num2)
    print(f"The sum of {num1} and {num2} is: {result}")
    
    # Test with more examples
    print(f"The sum of 10 and 15 is: {sum_two_numbers(10, 15)}")
    print(f"The sum of -4 and 9 is: {sum_two_numbers(-4, 9)}")
    print(f"The sum of 2.5 and 3.7 is: {sum_two_numbers(2.5, 3.7)}")
