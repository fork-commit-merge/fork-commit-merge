// Swift - Easy

import Foundation

func fibonacci(n: Int) -> Int {
    // TODO: Implement the fibonacci sequence function
    if n == 0 {
        return 0
    } else if n == 1 {
        return 1
    } else {
        var a = 0
        var b = 1
        var result = 0
        for _ in 2...n {
            result = a + b
            a = b
            b = result
        }
        return result
    }
}

// Example usage
let fibonacciNumber = fibonacci(n: 10) // This will calculate the 10th Fibonacci number, which is 55
print("The 10th Fibonacci number is \(fibonacciNumber)")

}

// Test cases (Don't touch!)
let testCases: [Int] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for test in testCases {
    print("fibonacci(\(test)) = \(fibonacci(n: test))")
}
