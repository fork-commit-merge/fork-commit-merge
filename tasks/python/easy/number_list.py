# Python - Easy

# define the function to calculate the sum of a list.
def calculate_sum_list(_list: any):
    # the value that is being printed to the console using the built in sum function from python
    value = sum(_list)
    print(value)

# Setting amount of natural numbers we want
natural_numbers_amount = 10
# Creating our natural numbers test list 1-10
natural_numbers = [n for n in range(1,natural_numbers_amount+1)]

#printing the natural numbers list
print(natural_numbers)

# printing the sum of the list
calculate_sum_list(natural_numbers)
