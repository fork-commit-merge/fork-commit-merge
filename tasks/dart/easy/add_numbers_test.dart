import 'add_numbers.dart';

void main() {
  final sum = addNumbers(5, 10);
  if (sum != 15) {
    throw StateError('addNumbers(5, 10) returned $sum, expected 15');
  }
  print('PASS: addNumbers(5, 10) == 15');
}
