import 'dart:io';

void main() {
  try {
    print("Input number: ");
    int angka = int.parse(stdin.readLineSync()!);
    if (angka.isNaN) {
      print("Value must number.");
    } else {
      // Cek apakah angka tersebut ganjil atau genap
      if (angka % 2 == 0) {
        print("Even");
      } else {
        print("Odd");
      }
    }
  } catch (e) {
    print("Error Guys: $e");
  }
}
