# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):
    # Print the list of numbers
    print("List of the first 10 natural numbers:", numbers)

    # Calculate the sum of the numbers
    total_sum = sum(numbers)

    # Print the sum
    print("Sum of the numbers:", total_sum)

def main():
    # Generate a list of the first 10 natural numbers
    numbers = list(range(1, 11))

    # Call the function with the list of numbers
    function(numbers)

if __name__ == "__main__":
    main()

