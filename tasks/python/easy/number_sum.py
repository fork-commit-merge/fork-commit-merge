def sum_with_interface():
    a = int(input("Enter the first number: "))
    b = int(input("Enter the second number: "))
    result = a + b

    print("\n╔" + "═" * 30 + "╗")
    print("║{:^30}║".format("SUM OF TWO NUMBERS"))
    print("╠" + "═" * 30 + "╣")
    print("║{:^30}║".format(f"{a} + {b} = {result}"))
    print("╚" + "═" * 30 + "╝")

# Run the function
sum_with_interface()
