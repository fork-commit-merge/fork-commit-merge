void main() {
  print(typeDataCheck(5));         // Expected output: int
  print(typeDataCheck(3.14));      // Expected output: double
  print(typeDataCheck("Hello"));   // Expected output: String
  print(typeDataCheck(true));      // Expected output: bool
  print(typeDataCheck(null));      // Expected output: Null
}

String typeDataCheck(var data) {
  return data.runtimeType.toString();
}