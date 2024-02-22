void main() {
  String text = "Example text";
  int lengthData = countLength(text);
  print('Length: $lengthData');
}

int countLength(String text) {
  return text.length;
}
