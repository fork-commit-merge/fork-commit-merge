// Rust - Medium

use std::io::{self, Write};

/// Converts a temperature from Celsius to Fahrenheit.
fn celsius_to_fahrenheit(celsius: f64) -> f64 {
    (celsius * 9.0 / 5.0) + 32.0
}

/// Converts a temperature from Fahrenheit to Celsius.
fn fahrenheit_to_celsius(fahrenheit: f64) -> f64 {
    (fahrenheit - 32.0) * 5.0 / 9.0
}

fn main() {
    // Prompt the user for the temperature value
    print!("Enter the temperature value: ");
    io::stdout().flush().expect("Failed to flush stdout");

    let mut temp_input = String::new();
    io::stdin()
        .read_line(&mut temp_input)
        .expect("Failed to read input");

    let temperature: f64 = match temp_input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            eprintln!("Error: Invalid temperature value. Please enter a valid number.");
            return;
        }
    };

    // Prompt the user for the current unit (Fahrenheit or Celsius)
    print!("Enter the current unit (C for Celsius, F for Fahrenheit): ");
    io::stdout().flush().expect("Failed to flush stdout");

    let mut unit_input = String::new();
    io::stdin()
        .read_line(&mut unit_input)
        .expect("Failed to read input");

    let unit = unit_input.trim();

    // Convert the given temperature to the opposite unit and display the result
    if unit.eq_ignore_ascii_case("C") || unit.eq_ignore_ascii_case("Celsius") {
        let converted = celsius_to_fahrenheit(temperature);
        println!("{:.2}°C is {:.2}°F", temperature, converted);
    } else if unit.eq_ignore_ascii_case("F") || unit.eq_ignore_ascii_case("Fahrenheit") {
        let converted = fahrenheit_to_celsius(temperature);
        println!("{:.2}°F is {:.2}°C", temperature, converted);
    } else {
        eprintln!("Error: Invalid unit. Please specify either 'C' (Celsius) or 'F' (Fahrenheit).");
    }
}
