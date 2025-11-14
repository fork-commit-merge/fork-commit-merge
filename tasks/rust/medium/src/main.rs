// Rust - Medium

use std::io;

fn main() {
    println!("Temperature Converter");
    println!("1. Celsius to Fahrenheit");
    println!("2. Fahrenheit to Celsius");
    println!("Enter your choice (1 or 2):");

    let mut choice = String::new();
    io::stdin()
        .read_line(&mut choice)
        .expect("Failed to read line");

    let choice: u32 = match choice.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Please enter a valid number!");
            return;
        }
    };

    if choice == 1 {
        println!("Enter temperature in Celsius:");
        let mut temp = String::new();
        io::stdin()
            .read_line(&mut temp)
            .expect("Failed to read temperature");
        
        let celsius: f64 = match temp.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Please enter a valid number!");
                return;
            }
        };
        
        let fahrenheit = celsius_to_fahrenheit(celsius);
        println!("{}°C = {:.2}°F", celsius, fahrenheit);
    } else if choice == 2 {
        println!("Enter temperature in Fahrenheit:");
        let mut temp = String::new();
        io::stdin()
            .read_line(&mut temp)
            .expect("Failed to read temperature");
        
        let fahrenheit: f64 = match temp.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Please enter a valid number!");
                return;
            }
        };
        
        let celsius = fahrenheit_to_celsius(fahrenheit);
        println!("{}°F = {:.2}°C", fahrenheit, celsius);
    } else {
        println!("Invalid choice! Please enter 1 or 2.");
    }
}

fn celsius_to_fahrenheit(c: f64) -> f64 {
    (c * 9.0 / 5.0) + 32.0
}

fn fahrenheit_to_celsius(f: f64) -> f64 {
    (f - 32.0) * 5.0 / 9.0
}
