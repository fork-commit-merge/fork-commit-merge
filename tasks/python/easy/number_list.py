# Python - Easy

# TODO: Create the Simple Python Program to Interact with Lists
# create list with first 10 natural numbers
firstTenNaturalNumbers = []
for i in range(11):
    if i != 0:
        firstTenNaturalNumbers.append(i)
        print(firstTenNaturalNumbers)
print("The sum of First Ten Natural Numbers is:",sum(firstTenNaturalNumbers))