// Rust - Medium

use std::io;

fn main() {
    // TODO: Create a program in Rust that converts temperatures between Fahrenheit and Celsius
    let mut temp = String::new();
    println!("Please Enter the temperature value");
    io::stdin()
        .read_line(&mut temp)
        .expect("Failed to read the input");
    // The pattern matching statement will return the 0.00 if there is anything except a number that is being pased in the temp variable
    let temp: f64 = match temp.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("please enter a valid temperature.");
            0.00
        }
    };
    let mut curr_unit = String::new();
    println!("Please select the current unit of temperature that you entered");
    println!("Press 1 for Fahrenheit");
    println!("Press 2 for Celsius");
    io::stdin()
        .read_line(&mut curr_unit)
        .expect("Failed to read the input");
    let curr_unit = curr_unit.trim();
    // if the value of current unit of temperature is neither Fahrenheit or Celsius the 3 will be returned
    let curr_unit = match curr_unit {
        "1" => 1,
        "2" => 2,
        _ => {
            println!("Please input 1 or 2");
            3
        }
    };
    let converted_temp = if curr_unit == 1 {
        (temp - 32.0) / 1.8
    } else if curr_unit == 2 {
        temp * 1.8 + 32.0
    } else {
        0.00
    };
    // The output will only be printed if the input is a valid temperature type
    if curr_unit == 1 || curr_unit == 2 {
        println!("The converted temperature is {}", converted_temp);
    }
}
