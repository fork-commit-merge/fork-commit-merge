// Rust - Medium

use std::io;

//This code is a simple temperature converter that reads the user’s input, parses it into a temperature and a scale (Celsius or Fahrenheit), and then converts the temperature to the other scale. 
//It continues to do this in an infinite loop until the user quits the program. If the user enters an invalid input, it prints an error message and asks for the input again. It’s a nice example 
//of a simple interactive program in Rust!
fn main() {
    println!("Hello!");
    println!("Please enter the temperature and scale (C or F).");
    println!("For example, 32F or 100C.");
    println!("Press Ctrl+C to quit.");

    loop {
        let mut temp = String::new();

        io::stdin()
            .read_line(&mut temp)
            .expect("Failed to read line");

        let temp = temp.trim();

        let (temp, scale) = temp.split_at(temp.len() - 1);

        let temp: f32 = match temp.parse() {
            Ok(num) => num,
            Err(_) => {
                println!("{} is not a number!", temp);
                continue;
            }
        };

        match scale {
            "C" => println!("{}C = {}F", temp, temp * 1.8 + 32.0),
            "F" => println!("{}F = {}C", temp, (temp - 32.0) / 1.8),
            _ => println!("\"{}\" is not a valid scale.", scale),
        }
    }
}
