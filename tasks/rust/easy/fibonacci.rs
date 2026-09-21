// Rust - Easy

use std::io; 


// TODO: Implement fibonacci sequence in Rust

// Calculates fibonacci numbers up to n = 186 

fn fibonacci(n : usize) -> u128 { 

    if n == 0 { 
        return 0; 
    }
    if n == 1 { 
        return 1; 
    }

    let mut prev = 0; 
    let mut curr = 1; 

    for _ in 2..=n { 

        let next = prev + curr; 
        prev = curr; 
        curr = next; 

    }

    curr 
}




fn main() {

    let mut input = String::new(); 

    print!("Input N: ");

    use io::Write;
    io::stdout().flush().expect("Failed to flush stdout"); 
    io::stdin().read_line(&mut input).expect("Failed to read");
    

    let n : usize = input.trim().parse().expect("Number is invalid"); 
    let result = fibonacci(n); 

    println!("The n-th Fibonacci Number: {result}"); 

}