# Python - Easy

# TODO: Create the Simple Python Program to Interact with Lists

LIST : list = []
numOfItems = int(input("How many integers do you want to store in the list? "))

for i in range(numOfItems):
	number = int(input(f"Integer {i + 1} : "))
	LIST.append(number)

SUM : int = 0
for i in LIST:
	SUM += i
print(f"Mean of all the integers stored in the list : {SUM / len(LIST)}")