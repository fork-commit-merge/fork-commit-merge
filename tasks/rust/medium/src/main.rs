// Rust - Medium

use std::io::{self, Write};

/// Main function
///
/// # Panics
/// 
/// Panics if there is an error reading user input
/// Panics if there is an error flushing stdout
/// Panics if there is an error parsing user input for temperature
/// Panics if there is an error parsing user input for unit
///
fn main() -> Result<(), Box<dyn std::error::Error>> {    
    // Print instructions for temperature prompt
    print!("Please enter the temperature value: ");
    io::stdout().flush()?;

    // Read user input as a string
    let mut temp = String::new();
    io::stdin().read_line(&mut temp)?;

    // Validate temperature as a float
    let temp: f64 = temp.trim().parse()?;

    // Print instructions for unit prompt
    println!("Please enter the current unit.");
    print!("Hint: 1/F/f = Fahrenheit, 2/C/c = Celsius: ");
    io::stdout().flush()?;

    // Read user input as a string
    let mut unit = String::new();
    io::stdin().read_line(&mut unit)?;

    // Validate unit against expected values
    match unit.trim() {
        "1" | "F" | "f" => {
            // Convert Fahrenheit to Celsius
            let converted = (temp - 32.0) * 5.0 / 9.0;
            println!("{temp}°F = {converted}°C");
        },
        "2" | "C" | "c" => {
            // Convert Celsius to Fahrenheit
            let converted = (temp * 9.0 / 5.0) + 32.0;
            println!("{temp}°C = {converted}°F");
        },
        // Everything else
        _ => {
            // Input doesn't match expected values
            eprintln!("Invalid input");
        }
    }

    // Return success code
    Ok(())
}
