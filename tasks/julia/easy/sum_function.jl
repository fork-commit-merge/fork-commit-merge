# Julia - Easy

function print_sum(a, b)
    sum = a + b
    println("The sum of $a and $b is: $sum")
end

println("Enter the first number:")
a = parse(Float64, readline())

println("Enter the second number:")
b = parse(Float64, readline())

print_sum(a, b)
