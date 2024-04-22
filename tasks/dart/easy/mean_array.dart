void main() {
  List<int> data = [5, 10, 15, 20, 25];
  double mean = calculateMean(data);
  print('Mean: $mean');  // Expected output: Mean: 15.0
}

// Function to calculate the mean of a list of integers and return it as a double.
double calculateMean(List<int> numbers) {
  if (numbers.isEmpty) {
    throw ArgumentError("The list cannot be empty.");
  }
  
  int sum = 0;
  // Iterate through each number in the list to calculate the sum.
  for (int number in numbers) {
    sum += number;
  }

  // Calculate the mean.
  return sum / numbers.length;
}
