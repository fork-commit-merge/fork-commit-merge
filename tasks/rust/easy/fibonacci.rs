// Rust - Easy

use std::io;
use std::io::Write;

fn main() {

    // Input Number
    print!("Input integer number(1 or over): ");
    io::stdout().flush().unwrap();
    let mut input = String::new();
    io::stdin().read_line(&mut input).ok();
    let number: u128 = input.trim().parse().ok().unwrap();
    if number == 0 {
        println!("Input number is 1 or over.");
    }

    // Calculate　Fibonacci Numbers
    let mut fibonacci_numbers = (0, 1);
    for loop_number in 1..number+1 {
        if number == loop_number {
            let answer = fibonacci_numbers.0 + fibonacci_numbers.1;
            println!("{}", answer);
        }
        else {
            fibonacci_numbers.1 = fibonacci_numbers.0 + fibonacci_numbers.1;
            fibonacci_numbers.0 = fibonacci_numbers.1 - fibonacci_numbers.0;
        }
    }
}