void main() {
  String text = "Example text";
  int lengthData = countLength(text);
  print('Length: $lengthData');
}

// Counts the characters in [text] without using String.length or Rune methods.
int countLength(String text) {
  int count = 0;
  try {
    while (true) {
      text[count];
      count++;
    }
  } on RangeError {
    return count;
  }
}
