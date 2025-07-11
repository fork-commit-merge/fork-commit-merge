void main() {
  String text = "Hello, World!";
  int lengthData = countLength(text);
  print('Length: $lengthData');
}

int countLength(String text) {
  return text.length;
}
