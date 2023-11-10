# Python - Easy

# TODO: Write a function that returns the sum of two numbers

def sum(a, b):
    c = a + b
    return c

while True:
    num1 = int(input("Please enter the first number: "))
    num2 = int(input("Please enter the second number: "))

    print(f"The sum of {num1} and {num2} is {sum(num1, num2)}")

    again = input("Do you want to sum numbers again 'yes' or 'no'?: ")

    if again == "yes":
        continue
    elif again == "no":
        break
    else:
        print("Please write either 'yes' or 'no'!")