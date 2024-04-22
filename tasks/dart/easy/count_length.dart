int countLength(String input) {
  int length = 0;
  for (int i = 0; i < input.length; i++) {
    length++;
  }
  return length;
}

void main() {
  String testString = "Hello, world!";
  print("The length of the string is: ${countLength(testString)}"); // Output will be 13
}
