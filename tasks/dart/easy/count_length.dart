void main() {
  // String text = "Example text";
  // int lengthData = countLength(text);
  // print('Length: $lengthData');
  final inputLength = stringLengthCounter('Hello');
  print(inputLength);
}

// TODO: Create a function for counting the length of a string
int stringLengthCounter(String input) {
  return input.length;
}
