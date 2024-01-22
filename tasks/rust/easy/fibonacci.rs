// Rust - Easy
use std::io;

fn main() {
    println!("Enter the value of n to calculate the n-th Fibonacci number:");

    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");

    let n: u32 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            eprintln!("Invalid input. Please enter a non-negative integer.");
            return;
        }
    };

    let result = fibonacci(n);
    println!("The {}-th Fibonacci number is: {}", n, result);
}

fn fibonacci(n: u32) -> u64 {
    if n == 0 {
        return 0;
    } else if n == 1 {
        return 1;
    }

    let mut fib = (0, 1);

    for _ in 2..=n {
        fib = (fib.1, fib.0 + fib.1);
    }

    fib.1
}



// TODO: Implement fibonacci sequence in Rust
