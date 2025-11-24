void main() {
  // Example usage:
  List<int> numbers = [2, 4, 6, 8, 10];
  double meanValue = calculateMean(numbers);
  print("Mean: $meanValue");
}

// Function to calculate the mean of a list of integers
double calculateMean(List<int> values) {
  // Manually count length
  int count = 0;
  for (int _ in values) {
    count = count + 1;
  }

  // Manually calculate sum
  int sum = 0;
  for (int i = 0; i < count; i = i + 1) {
    sum = sum + values[i];
  }

  // Convert to double manually
  double mean = sum / count;

  return mean;
}
