void main() {
  String text = "sample text";
  int lengthData = countLength(text);
  print('Length: $lengthData');
}

int countLength(String str) {
  int count = 0;
  
  for (int i = 0; i < str.length; i++) {
    count++;
  }
  
  return count;
}
