double calculateMean(List<int> numbers) {
  int sum = 0;

  for (int i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return sum / numbers.length;
}

void main() {
  List<int> data = [5, 10, 15, 20, 25];
  double mean = calculateMean(data);
  print('Mean: $mean'); 
}
