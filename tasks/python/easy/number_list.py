# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

first_10_natural_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(f"List of first 10 natural numbers is {first_10_natural_numbers}")

sum_of_numbers = 0
for i in first_10_natural_numbers:
    sum_of_numbers += i

print(f"The sum of first 10 natural numbers is {sum_of_numbers}")