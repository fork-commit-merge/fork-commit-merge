import std.stdio;
import std.algorithm;
import std.array;

void main()
{
    string original = "Hello, World!";
    auto reversed = original.dup;
    reverse(reversed);

    writeln("Original String: ", original);
    writeln("Reversed String: ", reversed);
}