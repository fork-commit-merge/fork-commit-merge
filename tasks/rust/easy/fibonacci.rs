use std::io;

fn fibonacci(n: u32) -> u64 {
    if n == 0 {
        return 0;
    } else if n == 1 {
        return 1;
    }

    let mut a = 0;
    let mut b = 1;
    let mut result = 0;

    for _ in 2..=n {
        result = a + b;
        a = b;
        b = result;
    }

    result
}

fn main() {
    println!("Fibonacci Sequence Calculator");

    println!("Enter the number of terms in the sequence:");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let n: u32 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input. Please enter a valid number.");
            return;
        }
    };

    println!("The Fibonacci sequence up to {} terms is:", n);
    for i in 0..n {
        print!("{} ", fibonacci(i));
    }
}
