void main() {
  List<int> data = [5, 10, 15, 20, 25];
  double mean = calculateMean(data);
  print('Mean: $mean');  // Expected output: Mean: 15.0
}

// Function to calculate the mean of a list of integers
double calculateMean(List<int> values) {
  if (values.isEmpty) {
    return 0.0; // Handle the case where the list is empty to avoid division by zero
  }

  int sum = values.reduce((a, b) => a + b);
  return sum / values.length.toDouble();
}

