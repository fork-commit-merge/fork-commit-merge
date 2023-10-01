void main() {
  String text = "Example text";
  int lengthData = countLength(text);
  print('Length: $lengthData');
}

// TODO: Create a function for counting the length of a string
int countLength(String text) {
  int count = 0;
  for (int i = 0; i < text.runes.length; i++) {
    count++;
  }
  return count;
}