void main() {
  print(typeDataCheck(5));         // Output: int
  print(typeDataCheck(3.14));      // Output: double
  print(typeDataCheck("Hello"));   // Output: String
  print(typeDataCheck(true));      // Output: bool
  print(typeDataCheck(null));      // Output: Null
}

// Function to check the data type of a parameter and return a string
String typeDataCheck(dynamic data) {
  if (data == null) {
    return 'Null';
  } else {
    return data.runtimeType.toString();
  }
}
