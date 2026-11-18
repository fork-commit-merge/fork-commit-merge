void main() {
  List<int> data = [5, 10, 15, 20, 25];
  double mean = calculateMean(data);
  print('Mean: $mean');  // Expected output: Mean: 15.0
}

double calculateMean(List<int> numbers) {
  int total = 0;
  for (int number in numbers) {
    total += number;
  }
  return total / numbers.length;
}
