import Foundation

func fibonacci(n: Int) -> Int {
    // Base cases: Fibonacci of 0 and 1 is the number itself
    if n == 0 || n == 1 {
        return n
    }
    
    // Recursive case: Fibonacci of n is the sum of Fibonacci(n-1) and Fibonacci(n-2)
    return fibonacci(n: n - 1) + fibonacci(n: n - 2)
}

// Test cases (Don't touch!)
let testCases: [Int] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for test in testCases {
    print("fibonacci(\(test)) = \(fibonacci(n: test))")
}
