// Rust - Easy

use std::io;

// TODO: Implement fibonacci sequence in Rust

fn fibonacci(n: u32) -> u64 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

fn main() {
    println!("Enter the number of Fibonacci terms to generate:");
    
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read line");
    
    let n: u32 = input.trim().parse().expect("Please enter a valid number");
    
    println!("Fibonacci sequence:");
    for i in 0..n {
        println!("{}", fibonacci(i));
    }
}
