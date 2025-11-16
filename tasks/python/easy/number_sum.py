# Python - Easy

def add_numbers(a, b):
    """
    Returns the sum of two numbers.
    
    Args:
        a (int or float): First number
        b (int or float): Second number
        
    Returns:
        int or float: Sum of a and b
    """
    return a + b

# Example usage
if __name__ == "__main__":
    num1 = 5
    num2 = 3.5
    result = add_numbers(num1, num2)
    print(f"The sum of {num1} and {num2} is: {result}")
