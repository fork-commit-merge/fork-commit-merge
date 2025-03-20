def number_stuff():
    natural_numbers = [x for x in range(1, 11)]
    print(f"List of natural numbers from 1 - 10: {natural_numbers}")
    sum = 0
    for number in natural_numbers:
        sum += number
    print(f"Sum: {sum}")


number_stuff()
