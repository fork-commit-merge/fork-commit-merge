// D - Easy

import std.stdio;
import std.algorithm.mutation : reverse;
import std.array;

void main() {
    // Implement program to reverse a string
    writeln("Enter a string to reverse:");
    string input = readln().strip();
    
    char[] reversed = input.dup;
    reverse(reversed);
    
    writeln("Reversed string: ", reversed);
}
