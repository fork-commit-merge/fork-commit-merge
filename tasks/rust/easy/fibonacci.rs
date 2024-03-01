// Rust - Easy

use std::io;

// TODO: Implement fibonacci sequence in Rust

fn fibonacci(n: u32) -> u64 {
    if n == 0 {
        return 0;
    } else if n == 1 {
        return 1;
    }

    let mut a = 0;
    let mut b = 1;

    for _ in 2..=n {
        let temp = a + b;
        a = b;
        b = temp;
    }

    b
}

fn main() {
    println!("Enter the position of the Fibonacci sequence:");

    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");

    let n: u32 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Please enter a valid positive integer");
            return;
        }
    };

    let result = fibonacci(n);
    println!("Fibonacci({}) = {}", n, result);
}
