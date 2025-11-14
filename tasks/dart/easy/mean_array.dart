void main() {
  List<int> data = [5, 10, 15, 20, 25];
  double mean = calculateMean(data);
  print('Mean: $mean');  // Expected output: Mean: 15.0
}

/// Calculates the mean of a list of integers
/// 
/// Takes a list of integers as input and returns the mean as a double.
/// If the input list is empty, returns 0.0 to avoid division by zero.
/// 
/// Example:
/// ```dart
/// List<int> numbers = [5, 10, 15, 20, 25];
/// double result = calculateMean(numbers); // Returns 15.0
/// ```
double calculateMean(List<int> numbers) {
  if (numbers.isEmpty) return 0.0;
  
  int sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}

