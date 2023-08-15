// Rust - Medium

use std::io;

fn main() {
    let input_temp: f32 = get_temperature();
    let input_unit: Unit = get_unit();
    let output_temp: f32 = convert_temperature(&input_unit, input_temp);
    print_result(&output_temp, &input_temp, &input_unit)
}

enum Unit {
    Celsius,
    Fahrenheit,
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

fn get_unit() -> Unit {
    println!("What is the current unit: Fahrenheit (F) or Celsius (C)?");
    // loop while input isn't in C or Celsius format (case insensitive)
    let input_unit = loop {
        let mut input = String::new();
        // unwarp because the 'match' handles the error
        io::stdin().read_line(&mut input).unwrap();
        match input.trim().to_uppercase().as_str() {
            "C" | "CELSIUS" => break Unit::Celsius,
            "F" | "FAHRENHEIT" => break Unit::Fahrenheit,
            _ => println!("Please enter a valid unit - Fahrenheit (F) or Celsius (C):"),
        };
    };
    input_unit
}

fn convert_temperature(unit: &Unit, temp: f32) -> f32 {
    match unit {
        Unit::Celsius => c_to_f(temp),
        Unit::Fahrenheit => f_to_c(temp),
    }
}

fn print_result(out_temp: &f32, in_temp: &f32, in_unit: &Unit) {
    match in_unit {
        Unit::Celsius => println!("{}°C is equal to {}°F", in_temp, out_temp),
        Unit::Fahrenheit => println!("{}°F is equal to {}°C", in_temp, out_temp),
    }
}

fn f_to_c(val: f32) -> f32 {
    (val - 32.0) * 5.0 / 9.0
}

fn c_to_f(val: f32) -> f32 {
    (val * 9.0 / 5.0) + 32.0
}
