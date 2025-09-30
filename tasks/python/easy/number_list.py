# Python - Easy

# TODO: Create a Simple Python Program that:
# lists the first 10 natural numbers,
# prints that list to the console and,
# prints the sum of the numbers of that list

def function(numbers):
    num_list = []
    for i in range(10):
        num_list.append(i)
    print(num_list)
    sum_res = sum(num_list)
    print(sum_res)

if __name__ == "__main__":
    function(10)