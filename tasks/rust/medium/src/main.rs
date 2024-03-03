use std::io;

fn main() {
    println!("Temperature Converter");

    loop {
        println!("Choose an option:");
        println!("1. Convert Fahrenheit to Celsius");
        println!("2. Convert Celsius to Fahrenheit");
        println!("3. Exit");

        let mut choice = String::new();
        io::stdin().read_line(&mut choice).expect("Failed to read line");
        let choice: u32 = match choice.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Invalid input. Please enter a number.");
                continue;
            }
        };

        match choice {
            1 => fahrenheit_to_celsius(),
            2 => celsius_to_fahrenheit(),
            3 => {
                println!("Exiting the program. Goodbye!");
                break;
            }
            _ => println!("Invalid choice. Please enter a valid option."),
        }
    }
}

fn fahrenheit_to_celsius() {
    println!("Enter temperature in Fahrenheit:");

    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let fahrenheit: f64 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input. Please enter a valid number.");
            return;
        }
    };

    let celsius = (fahrenheit - 32.0) * 5.0 / 9.0;
    println!("{} Fahrenheit is equal to {} Celsius", fahrenheit, celsius);
}

fn celsius_to_fahrenheit() {
    println!("Enter temperature in Celsius:");

    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let celsius: f64 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input. Please enter a valid number.");
            return;
        }
    };

    let fahrenheit = celsius * 9.0 / 5.0 + 32.0;
    println!("{} Celsius is equal to {} Fahrenheit", celsius, fahrenheit);
}
