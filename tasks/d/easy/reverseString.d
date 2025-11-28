// D - Easy
// String Reversal Program
// This program demonstrates string reversal in D programming language

import std.stdio;
import std.string : reverse;
import std.array : array;

void main() {
    // Original string to reverse
    string originalString = "Hello, World!";
    
    // Convert string to mutable character array
    char[] charArray = originalString.dup;
    
    // Reverse the character array
    reverse(charArray);
    
    // Convert back to string
    string reversedString = charArray.idup;
    
    // Display results
    writeln("Original String: ", originalString);
    writeln("Reversed String: ", reversedString);
}
