void main() {
  List<int> data = [5, 10, 15, 20, 25];
  double mean = calculateMean(data);
  print('Mean: $mean');  // Expected output: Mean: 15.0
}

/// Calculates the arithmetic mean (average) of a list of integers.
///
/// This function computes the mean by summing all elements in the provided
/// list and dividing by the total count of elements. The arithmetic mean is
/// a fundamental statistical measure that represents the central tendency
/// of a dataset. It is calculated using the formula:
///
///   mean = (x1 + x2 + ... + xn) / n
///
/// where n is the number of elements in the list.
///
/// The implementation avoids using built-in Dart collection methods like
/// `reduce` or `fold` to demonstrate the underlying algorithm explicitly.
/// Instead, it uses a traditional for-loop to accumulate the sum, which
/// makes the logic transparent and easy to follow for learners.
///
/// Time Complexity: O(n) - We iterate through the list exactly once.
/// Space Complexity: O(1) - Only a single accumulator variable is used.
///
/// Example usage:
/// ```dart
/// List<int> numbers = [5, 10, 15, 20, 25];
/// double result = calculateMean(numbers);
/// print(result); // Output: 15.0
/// ```
///
/// [data] A non-empty list of integers to compute the mean from.
/// Returns the arithmetic mean as a [double].
/// Throws an [ArgumentError] if the input list is empty.
double calculateMean(List<int> data) {
  if (data.isEmpty) {
    throw ArgumentError('Cannot calculate mean of an empty list');
  }

  int sum = 0;
  for (int i = 0; i < data.length; i++) {
    sum += data[i];
  }

  return sum / data.length;
}

