use std::io;
use std::process;

fn main() {
    println!("To end the program, type 'exit'");

    loop {
        println!("Type a positive integer: ");
        let mut input = String::new();
        io::stdin().read_line(&mut input).expect("Failed to read line!");

        let trimmed_input = input.trim();

        if trimmed_input == "exit" {
            process::exit(0);
        }

        let num: Result<u32, _> = trimmed_input.parse();

        match num {
            Ok(num) => {
                println!("Fibonacci number ({}) is {}.", num, fib(num));
            }
            Err(_) => {
                println!("Invalid input. Please enter a valid positive integer!");
            }
        }
    }
}

fn fib(n: u32) -> u32 {
    if n <= 1 {
        return n;
    }
    let mut a = 0;
    let mut b = 1;
    for _ in 2..=n {
        let temp = a + b;
        a = b;
        b = temp;
    }
    b
}
