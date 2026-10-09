// Rust - Easy

use std::io;

/// Returns the n-th Fibonacci number.
/// The sequence starts with 0 and 1: 0, 1, 1, 2, 3, 5, 8, ...
fn fibonacci(n: u64) -> u64 {
    let mut previous: u64 = 0;
    let mut current: u64 = 1;

    for _ in 0..n {
        let next = previous + current;
        previous = current;
        current = next;
    }

    previous
}

fn main() {
    println!("Enter a non-negative integer n to calculate the n-th Fibonacci number:");

    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read input");

    let n: u64 = input
        .trim()
        .parse()
        .expect("Please enter a valid non-negative integer");

    println!("fibonacci({}) = {}", n, fibonacci(n));
}
