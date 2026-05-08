// D - Easy
// Implement program to reverse a string

import std.stdio;

void main() {
    string input = "Hello, World!";
    string reversed;
    
    foreach (c; input) {
        reversed = c ~ reversed;
    }
    
    writeln("Original String: ", input);
    writeln("Reversed String: ", reversed);
}
