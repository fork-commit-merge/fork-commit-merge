// Rust - Medium

use std::io;

fn main() {
  // TODO: Create a program in Rust that converts temperatures between Fahrenheit and Celsius

    // Taking input of temperature from user along with its unit and separate unit to another sting
    println!("Enter temperature with its unit (e.g. \"100 F\" or \"36C\"):");
    let mut temp = String::new();
    io::stdin()
        .read_line(&mut temp)
        .expect("Failed to read line");

    // Split the input string into two parts at index len - 2 and assign them back
    let raw = temp.trim().to_string();
    let split_at = raw.len().saturating_sub(1);
    let (left, right) = raw.split_at(split_at);
    temp = left.trim().to_string();
    let unit = right.trim().to_string();

    println!("Temperature part: {}", temp);
    println!("Unit part: {}", unit);

    let temp: f32 = temp.parse().expect("Please type a valid number!");

    // Convert temp between Fahrenheit and Celsius
    // If input unit is 'F' (Fahrenheit) convert to Celsius
    if unit.to_uppercase() == "F" {
        let celsius = (temp - 32.0) * 5.0 / 9.0;
        println!("Temperature in Celsius: {}", celsius);
    } else if unit.to_uppercase() == "C" {
        // If input unit is 'C' (Celsius) convert to Fahrenheit
        let fahrenheit = (temp * 9.0 / 5.0) + 32.0;
        println!("Temperature in Fahrenheit: {}", fahrenheit);
    } else {
        println!("Unrecognized unit: '{}'. Use 'C' or 'F'.", unit);
    }
}
