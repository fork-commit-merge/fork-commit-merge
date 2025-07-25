# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):
    # Create a list of the first 10 natural numbers (1 through 10)
    numbers = list(range(1, 11))
    
    # Print the created list to the console
    print("List of first 10 natural numbers:", numbers)
    
    # Print the sum of the numbers in the list
    total_sum = sum(numbers)
    print("Sum of the numbers:", total_sum)
    
    return numbers

# Call the function to demonstrate the functionality
if __name__ == "__main__":
    function(None)
