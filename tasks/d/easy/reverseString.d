// D - Easy
// Implement program to reverse a string

import std.stdio;

void main() {
    string input = "hello";
    string reversed;
    
    foreach (c; input) {
        reversed = c ~ reversed;
    }
    
    writeln("Original: ", input);
    writeln("Reversed: ", reversed);
}
