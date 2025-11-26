// D - Easy

import std.stdio;
import std.algorithm;
import std.array;

void main() {
    string originalString = "Hello, World!";
    
    // Reverse the string
    string reversedString = originalString.dup.reverse.array.idup;
    
    // Display the results
    writeln("Original String: ", originalString);
    writeln("Reversed String: ", reversedString);
}
