// Rust - Medium

use std::io;

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
