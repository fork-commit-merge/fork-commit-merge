// Rust - Medium

use std::io;

fn main() {
    // TODO: Create a program in Rust that converts temperatures between Fahrenheit and Celsius
    let mut input = String::new();
    println!("Enter 1 to convert from Fahrenheit to Celsius, or 2 to convert from Celsius to Fahrenheit: ");
    io::stdin().read_line(&mut input).unwrap();
    let choice: u32 = input.trim().parse().unwrap();

    input.clear();
    println!("Enter temperature: ");
    io::stdin().read_line(&mut input).unwrap();
    let temperature: f32 = input.trim().parse().unwrap();

    match choice {
        1 => {
            let celsius = (temperature - 32.0) * 5.0/9.0;
            println!("Temperature in Celsius: {}", celsius);
        },
        2 => {
            let fahrenheit = temperature * 9.0/5.0 + 32.0;
            println!("Temperature in Fahrenheit: {}", fahrenheit);
        },
        _ => println!("Invalid choice"),
    }
}