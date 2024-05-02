double calculateMean(List<int> numbers) {
  if (numbers.isEmpty) {
    return 0.0;
  }
  
  int sum = 0;
  for (int number in numbers) {
    sum += number;
  }
  
  return sum / numbers.length.toDouble();
}

void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
  print('Mean: ${calculateMean(numbers)}');
}
