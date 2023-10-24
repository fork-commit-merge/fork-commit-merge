import 'dart:io';

// Function to add two numbers
int addNumbers(int a, int b) {
  return a + b;
}

void main() {
  // Read the first number from the user
  stdout.write('Enter the first number: ');
  int firstNumber = int.parse(stdin.readLineSync()!);

  // Read the second number from the user
  stdout.write('Enter the second number: ');
  int secondNumber = int.parse(stdin.readLineSync()!);

  // Call the addNumbers function and print the result
  int sum = addNumbers(firstNumber, secondNumber);
  print('The sum of $firstNumber and $secondNumber is: $sum');
}
