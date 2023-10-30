void main() {
  List<int> data = [5, 10, 15, 20, 25];
  double mean = calculateMean(data);
  print('Mean: $mean');
}

double calculateMean(List<int> data) {
  if (data.isEmpty) {
    return 0.0;
  }

  double sum = 0.0;
  for (int value in data) {
    sum += value.toDouble();
  }

  return sum / data.length;
}
