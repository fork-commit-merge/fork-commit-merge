// Rust - Easy

use std::io;

// TODO: Implement fibonacci sequence in Rust
use std::io;
fn main () {
        let mut num:u32=0;
    let mut input = String::new();
    
    println!("Enter number: ");
    io::stdin().read_line(&mut input).expect("Not a valid string");
    num = input.trim().parse().expect("Not a valid number");
       println!("The Fibonacci num is {}",fib(num));

}


fn fib (n: u32) -> u32 {
   if n <= 0 {
       return 0;
   } else if n == 1 {
       return 1;
   }   fib(n - 1) + fib(n - 2)
}