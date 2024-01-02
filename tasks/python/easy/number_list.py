# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def sum_list(l):
    sum=0
    for i in l:
        sum+=int(i)
    return sum
l=[1,2,3,4,5,6,7,8,9,10]
print(sum_list(l))
