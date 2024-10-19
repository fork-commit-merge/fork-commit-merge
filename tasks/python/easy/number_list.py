# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):
    lista = list()
    for i in range(1,numbers + 1):
        lista.append(i)
    print(lista)
    print(sum(lista))

function(10)