// Rust - Medium

use std::io;

fn main() {
  println!("Temperature Converter");
  println!("1. Fahrenheit to Celsius");
  println!("2. Celsius to Fahrenheit");
  
  let mut choice = String::new();
  println!("Enter your choice (1 or 2):");
  io::stdin().read_line(&mut choice).expect("Failed to read line");
  
  let choice: u32 = choice.trim().parse().expect("Please enter a valid number");
  
  let mut temp = String::new();
  println!("Enter temperature:");
  io::stdin().read_line(&mut temp).expect("Failed to read line");
  let temp: f64 = temp.trim().parse().expect("Please enter a valid number");
  
  match choice {
    1 => {
      let celsius = (temp - 32.0) * 5.0 / 9.0;
      println!("{:.2}°F is equal to {:.2}°C", temp, celsius);
    },
    2 => {
      let fahrenheit = (temp * 9.0 / 5.0) + 32.0;
      println!("{:.2}°C is equal to {:.2}°F", temp, fahrenheit);
    },
    _ => println!("Invalid choice"),
  }
}
