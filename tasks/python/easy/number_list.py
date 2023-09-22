# Python - Easy

# TODO: Create the Simple Python Program to Interact with Lists
num_lst = [0] * 10
sum = 0
for i in range(1, 11):
    num_lst[i-1] = i
    sum += i
print(num_lst)
print(sum)