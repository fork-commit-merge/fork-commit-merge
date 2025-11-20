void main() {
  String text = "Example text";
  int lengthData = countLength(text);
  print('Length: $lengthData');
}

// Count characters without using .length or Rune helpers
int countLength(String value) {
  int count = 0;

  // Using "_" tells Dart we don't need the loop variable
  for (var _ in value.split('')) {
    count++;
  }

  return count;
}
