double calculateMean(List<int> numbers) {
  if (numbers.isEmpty) {
    throw ArgumentError('Cannot calculate mean of an empty list.');
  }
  return numbers.reduce((a, b) => a + b) / numbers.length;
}
