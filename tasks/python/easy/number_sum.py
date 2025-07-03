# Python - Easy

# TODO: Write a function that returns the sum of two numbers

def add_numbers(a, b):
    """
    Function that returns the sum of two numbers
    
    Args:
        a: first number
        b: second number
    
    Returns:
        sum of a and b
    """
    return a + b

# Test the function
if __name__ == "__main__":
    # Test cases
    print("Sum of 5 and 3:", add_numbers(5, 3))  # Should print: 8
    print("Sum of -2 and 7:", add_numbers(-2, 7))  # Should print: 5
    print("Sum of 0 and 0:", add_numbers(0, 0))  # Should print: 0
