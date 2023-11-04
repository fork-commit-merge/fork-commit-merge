# Python - Easy
# TODO: Write a function that returns the sum of two numbers
# The following program accepts two numbers from the user through command line 
# and displays the result to console
import sys

def sum(a, b):
    result = a+b
    return result

if __name__ == "__main__":

    # Check the number of command-line arguments
    if len(sys.argv) != 3:
        print("Usage: python number_sum.py num1 num2")
    else:
        num1 = float(sys.argv[1])
        num2 = float(sys.argv[2])
        sum_result = sum(num1, num2)
        print(f"The sum of {num1} and {num2} is {sum_result:.5f}")
