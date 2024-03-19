# Python - Easy

# TODO: Write a function that returns the sum of two numbers
def add_numbers(num1, num2):
    sum = num1 + num2
    return sum

def main():
    a = input("Enter the first number: ")
    b = input("Enter the second number: ")

    result = add_numbers(a, b)

    print(f"The sum of {a} and {b} is {result}.")

if __name__ == "__main__":
    main()