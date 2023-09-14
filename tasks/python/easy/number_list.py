# Python - Easy

# TODO: Create the Simple Python Program to Interact with Lists

# creating an empty list
natural_nums = []

# using loop to add numbers
for i in range(1,11):
    natural_nums.append(i)
    
print(f"List of Natural Numbers: {natural_nums}")

# initialising sum variable
sum = 0

# using loop to add numbers from the list
for i in range(len(natural_nums)):
    sum += i

print(f"Sum of first 10 Natural Numbers is: {sum}")