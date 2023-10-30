void main() {
  String text = "Example text";
  int lengthData = countLength(text);
  print('Length: $lengthData');
}

int countLength(String text) {
  int length = 0;
  for (int i = 0; i < text.length; i++) {
    length++;
  }
  return length;
}
