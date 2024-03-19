# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):
    # Define a function to generate the first n natural numbers
    natural_numbers = []
    for i in range(1, numbers + 1):
        natural_numbers.append(i)
    return natural_numbers



def main():
    # Generate the first 10 natural numbers
    first_10_natural_numbers = function(10)
    
    # Print the list of first 10 natural numbers
    print("List of first 10 natural numbers:", first_10_natural_numbers)
    
    # Calculate and print the sum of the first 10 natural numbers
    sum_of_numbers = sum(first_10_natural_numbers)
    print("Sum of the first 10 natural numbers:", sum_of_numbers)

# Execute the main function
if __name__ == "__main__":
    main()