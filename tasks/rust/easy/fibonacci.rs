// Rust - Easy

use std::io;

// TODO: Implement fibonacci sequence in Rust

fn fibonacci(n: u32) -> u32 {
    if n == 0 {
        return 0;
    } else if n == 1 {
        return 1;
    }

    let mut prev = 0;
    let mut curr = 1;

    for _ in 2..=n {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

fn main() {
    println!("Enter the value of n:");

    let mut n = String::new();

    io::stdin().read_line(&mut n)
        .expect("Failed to read line");

    let n: u32 = n.trim().parse()
        .expect("Please enter a valid number");

    let fib_n = fibonacci(n);
    
    println!("The {}-th Fibonacci number is: {}", n, fib_n);
}
