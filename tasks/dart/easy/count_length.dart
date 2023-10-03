void main() {
  String text = "Example text";
  int lengthData = countLength(text);
  print('Length: $lengthData');
}

int countLength(String arg) {
  int countLength = 0;
  arg.runes.forEach((int rune) {
    countLength++;
  });
  return countLength;
}
