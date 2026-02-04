// Swift - Easy

import Foundation

func fibonacci(n: Int) -> Int {
    if n <= 1 {
        return n
    }
    return fibonacci(n: n - 1) + fibonacci(n: n - 2)
}

// Test cases (Don't touch!)
let testCases: [Int] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for test in testCases {
    print("fibonacci(\(test)) = \(fibonacci(n: test))")
}
