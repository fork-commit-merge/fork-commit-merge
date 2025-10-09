// Rust - Easy

use std::io;

// TODO: Implement fibonacci sequence in Rust
fn fibonacci(n: u32) -> u32 {
    if n <= 1 {
        n
    } else {
        fibonacci(n - 1) + fibonacci(n - 2)
    }
}