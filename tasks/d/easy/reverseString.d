import std.stdio;

void main() {
    // Get input from the user
    writeln("Enter a string: ");
    auto userInput = readln();

    // Reverse the string
    auto reversedString = reverseString(userInput);

    // Display the reversed string
    writeln("Reversed String: ", reversedString);
}

// Function to reverse a string
string reverseString(string input) {
    return input.representation.reverse().array;
}
