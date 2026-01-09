void main() {
  List<int> data = [5, 10, 15, 20, 25];
  double mean = calculateMean(data);
  print('Mean: $mean');  // Expected output: Mean: 15.0
}

// TODO: Implement a function called 'calculateMean' that takes a list of integers as input and returns the mean as a double.

double calculateMean(List<int> numbers) {
  int sum = 0;

  for (int num in numbers) {
    sum += num;
  }

  return sum / numbers.length;
}
