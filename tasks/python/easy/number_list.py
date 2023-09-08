# Python - Easy

# TODO: Create the Simple Python Program to Interact with Lists

def sum_list():
    """Creates list from 1 to 10 and returns it"""
    arr_of_nums = []
    for i in range(1, 11):
        arr_of_nums.append(i)
    return arr_of_nums

print(sum_list())
print(sum(sum_list()))
