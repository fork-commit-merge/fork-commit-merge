// Rust - Medium

use std::io;

fn main() {
    let input_temp: f32 = get_temperature();
    let input_unit: char = get_unit();
    let output_temp: f32 = convert_temperature(input_unit, input_temp);
    print_result(input_temp, input_unit, output_temp)
}

fn get_temperature() -> f32 {
    println!("Insert the temperature value:");
    // loop while input isn't a valid number
    let input_temp = loop {
        let mut input = String::new();
        // unwarp because the 'match' handles the error
        io::stdin().read_line(&mut input).unwrap();
        match input.trim().parse::<f32>() {
            Ok(temp) => break temp,
            Err(_) => println!("Please enter a valid temperature:"),
        }
    };
    input_temp
}

fn get_unit() -> char {
    println!("What is the current unit: Fahrenheit (F) or Celsius (C)?");
    // loop while input isn't in C or Celsius format (case insensitive)
    let input_unit = loop {
        let mut input = String::new();
        // unwarp because the 'match' handles the error
        io::stdin().read_line(&mut input).unwrap();
        match input.trim().to_uppercase().as_str() {
            "C" | "CELSIUS" => break 'C',
            "F" | "FAHRENHEIT" => break 'F',
            _ => println!("Please enter a valid unit - Fahrenheit (F) or Celsius (C):"),
        };
    };
    input_unit
}

fn convert_temperature(unit: char, temp: f32) -> f32 {
    let output = match unit {
        'C' => c_to_f(temp),
        'F' => f_to_c(temp),
        _ => None,
    };
    output.unwrap()
}

fn print_result(in_temp: f32, in_unit: char, out_temp: f32) {
    match in_unit {
        'C' => println!("{}°C is equal to {}°F", in_temp, out_temp),
        'F' => println!("{}°F is equal to {}°C", in_temp, out_temp),
        _ => println!("{}", out_temp),
    }
}

fn f_to_c(val: f32) -> Option<f32> {
    Some((val - 32.0) * 5.0 / 9.0)
}

fn c_to_f(val: f32) -> Option<f32> {
    Some((val * 9.0 / 5.0) + 32.0)
}
