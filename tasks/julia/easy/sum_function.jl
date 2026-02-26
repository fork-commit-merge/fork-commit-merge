# Julia - Easy
function sum_two_numbers(a, b)
    return a + b
end

function test_sum()
    test_pairs = [(5, 10), (3, 7), (-2, 2), (0, 0), (1.5, 2.5)]

    for (a, b) in test_pairs
        result = sum_two_numbers(a, b)
        println("The sum of $a and $b is: $result")
    end
end

test_sum()
