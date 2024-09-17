# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def ten_natural_numbers():
    list_numbers = list()
    for i in range(1,11):
        list_numbers.append(i)
    print(list_numbers)
    print(sum(list_numbers))

ten_natural_numbers() 