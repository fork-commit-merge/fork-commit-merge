void main() {
  List<int> data = [5, 10, 15, 20, 25];
  double mean = calculateMean(data);
  print('Mean: $mean');  // Expected output: Mean: 15.0
}

double calculateMean(List<int> data) {
  int total = data.reduce((value, element) => value + element);
  return total / data.length;
}
