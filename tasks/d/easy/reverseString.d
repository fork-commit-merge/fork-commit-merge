// D - Easy

import std.stdio;

void main() {
    string original = "Hello, World!";
    string reversed = "";

    foreach_reverse (char c; original) {
        reversed ~= c;
    }

    writeln("Original String: ", original);
    writeln("Reversed String: ", reversed);
}