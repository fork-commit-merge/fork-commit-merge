// Rust - Easy

use std::io;

fn fibonacci(n: u32) -> u64 {
    match n {
        0 => 0,
        1 => 1,
        _ => {
            let mut a = 0u64;
            let mut b = 1u64;
            for _ in 2..=n {
                let temp = a + b;
                a = b;
                b = temp;
            }
            b
        }
    }
}

fn main() {
    println!("Enter the number of Fibonacci terms to calculate:");
    
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read line");
    
    let n: u32 = input.trim().parse().expect("Please enter a valid number");
    
    println!("Fibonacci sequence:");
    for i in 0..n {
        println!("F({}) = {}", i, fibonacci(i));
    }
}
