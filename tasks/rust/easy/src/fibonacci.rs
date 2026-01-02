// Rust - Easy

use std::io;

// TODO: Implement fibonacci sequence in Rust
fn main(){
    // Taking input of the number of terms from user.
    let mut term = String::new();
    io::stdin()
        .read_line(&mut term)
        .expect("Failed to read line");
    let mut term : u32 = term.trim().parse().expect("Please type a number!");
    println!("Fibonacci Sequence till {}th term:", term);

    // starting and next of sequence
    let mut starting : u32 = 0;
    let mut next :u32 = 1;

    loop {
        if term == 0 {
            break;
        }
        println!("{}", starting);
        let temp = starting + next;
        starting = next;
        next = temp;
        term -= 1;

    }
}