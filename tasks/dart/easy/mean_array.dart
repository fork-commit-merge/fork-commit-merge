void main() {
  List<int> data = [5, 10, 15, 20, 25];
  double mean = calculateMean(data);
  print('Mean: $mean'); // Expected output: Mean: 15.0
}

double calculateMean(List<int> numbers) {
  if (numbers.isEmpty) return 0.0;
  int sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}
