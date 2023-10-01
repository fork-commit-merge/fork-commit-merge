double calculateMean(List<int> numbers) {
  if (numbers.isEmpty) {
    throw ArgumentError('The input list cannot be empty.');
  }

  int sum = 0;
  for (var number in numbers) {
    sum += number;
  }

  return sum / numbers.length.toDouble();
}

void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
  double mean = calculateMean(numbers);
  print('Mean: $mean');
}
