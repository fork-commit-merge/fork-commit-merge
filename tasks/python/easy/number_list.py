def solve(numbers):
    numbers.extend(range(1, 11))
    print("List of the first 10 natural numbers:", numbers)
    total = sum(numbers)
    print("Sum of the numbers:", total)

if __name__ == "__main__":
    numbers = []
    solve(numbers)
