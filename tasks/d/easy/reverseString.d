import std.stdio;

string reverseString(string input) {
    string reversed = "";
    for (int i = input.length - 1; i >= 0; i--) {
        reversed ~= input[i];
    }
    return reversed;
}

void main() {
    string originalString = "Hello, World!";
    string reversedString = reverseString(originalString);
    
    writeln("Original: ", originalString);
    writeln("Reversed: ", reversedString);
}
