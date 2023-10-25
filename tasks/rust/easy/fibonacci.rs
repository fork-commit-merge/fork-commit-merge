// Rust - Easy

use std::io;

// TODO: Implement fibonacci sequence in Rust
fn main() {
    println!("Enter the number of Fibonacci numbers to generate: ");

    let mut input = String::new();

    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read line");

    let n: u32 = input.trim().parse().expect("Please enter a valid number");

    for i in 0..n {
        let fib_number = fibonacci(i);
        println!("Fibonacci({}) = {}", i, fib_number);
    }
}

fn fibonacci(n: u32) -> u32 {
    if n == 0 {
        return 0;
    } else if n == 1 {
        return 1;
    } else {
        let mut prev = 0;
        let mut current = 1;
        for _ in 2..=n {
            let next = prev + current;
            prev = current;
            current = next;
        }
        return current;
    }
}