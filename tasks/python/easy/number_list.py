def function(numbers):
    # Print the list of numbers
    print("List of the first 10 natural numbers:", numbers)

    # Print the sum of the numbers
    print("Sum of the numbers:", sum(numbers))

if __name__ == "__main__":
    # Generating the first 10 natural numbers
    natural_numbers = list(range(1, 11))

    # Calling the function with the list of natural numbers
    function(natural_numbers)
