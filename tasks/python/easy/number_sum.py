# Python - Easy
def number_sum(a: int, b: int) -> int:
    return a + b


if __name__ == "__main__":
    a, b = map(int, input().split())
    print(number_sum(a, b))
