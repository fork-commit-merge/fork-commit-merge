// Swift - Easy

import Foundation

var fibonacciCache = [Int:Int]()

func fibonacci(n: Int) -> Int {
    if let value = fibonacciCache[n] {
        return value
    }
    
    let newValue = n < 2 ? n : fibonacci(n: n-1) + fibonacci(n: n-2)
    fibonacciCache[n] = newValue
    return newValue
}

// Test cases (Don't touch!)
let testCases: [Int] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for test in testCases {
    print("fibonacci(\(test)) = \(fibonacci(n: test))")
}
