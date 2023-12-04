void main() {
  List<int> data = [5, 10, 15, 20, 25];
  double mean = calculateMean(data);
  print('Mean: $mean'); // Expected output: Mean: 15.0
}

// TODO: Implement a function called 'calculateMean' that takes a list of integers as input and returns the mean as a double.

double calculateMean(List<int> data) {
  double sum = 0;
  for (int i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum / data.length;
}
