import Foundation

func fibonacci(n: Int) -> Int {
    if n <= 0 {
        return 0
    } else if n == 1 {
        return 1
    } else {
        var fib = [0, 1]
        for i in 2...n {
            let nextFib = fib[i - 1] + fib[i - 2]
            fib.append(nextFib)
        }
        return fib[n]
    }
}

// Test cases
let testCases: [Int] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for test in testCases {
    print("fibonacci(\(test)) = \(fibonacci(n: test))")
}
