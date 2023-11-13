// Rust - Medium

use std::io;

//This code is a simple temperature converter that reads the user’s input, parses it into a temperature and a scale (Celsius or Fahrenheit), and then converts the temperature to the other scale. 
//It continues to do this in an infinite loop until the user quits the program. If the user enters an invalid input, it prints an error message and asks for the input again. It’s a nice example 
//of a simple interactive program in Rust!


// The main function where our program starts
fn main() {
    // Print a welcome message
    println!("Hello!");
    println!("Hello, I am your intelligent decision tree classifier, delighted to be at your service.");
    // Ask the user to enter the temperature and scale
    println!("Please enter the temperature and scale (C or F).");
    println!("For example, 32F or 100C.");
    println!("Press Ctrl+C to quit.");

    // Start an infinite loop
    loop {
        // Initialize a mutable string to store the user's input
        let mut temp = String::new();

        // Read the user's input line by line
        io::stdin()
            .read_line(&mut temp)
            .expect("Failed to read line");

        // Remove any leading/trailing white space
        let temp = temp.trim();

        // Split the input into temperature and scale
        let (temp, scale) = temp.split_at(temp.len() - 1);

        // Try to parse the temperature as a floating point number
        let temp: f32 = match temp.parse() {
            Ok(num) => num,
            Err(_) => {
                // If the parsing fails, print an error message and continue with the next iteration of the loop
                println!("{} is not a number!", temp);
                continue;
            }
        };

        // Check the scale and convert the temperature accordingly
        match scale {
            "C" => println!("{}C = {}F", temp, temp * 1.8 + 32.0), // Convert Celsius to Fahrenheit
            "F" => println!("{}F = {}C", temp, (temp - 32.0) / 1.8), // Convert Fahrenheit to Celsius
            _ => println!("\"{}\" is not a valid scale.", scale), // If the scale is neither C nor F, print an error message
        }
    }
}
