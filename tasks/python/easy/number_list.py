# Python - Easy

# TODO: Create the Simple Python Program to Interact with Lists
def main():

    # Create a List
    num_list = []

    # Use a for loop to populate the list of the first 10 natural numbers
    for i in range(1,11):
        num_list.append(i)
    
    # Print the List
    print(num_list)

    # Print the sum of the numbers in the list using sum()
    print(sum(num_list))

main()