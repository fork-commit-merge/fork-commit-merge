void main() {
  print(typeDataCheck(5));          // Output: int
  print(typeDataCheck(3.14));      // Output: double
  print(typeDataCheck("Hello"));   // Output: String
  print(typeDataCheck(true));      // Output: bool
  print(typeDataCheck(null));      // Output: Null
}

/// Returns a string describing the data type of the given value
/// 
/// This function uses runtime type checking to determine and return
/// the type of the provided value as a string.
/// 
/// Example:
/// ```dart
/// print(typeDataCheck(42));        // 'int'
/// print(typeDataCheck('Dart'));    // 'String'
/// print(typeDataCheck(3.14));      // 'double'
/// print(typeDataCheck(true));      // 'bool'
/// print(typeDataCheck(null));      // 'Null'
/// ```
String typeDataCheck(dynamic value) {
  if (value == null) return 'Null';
  return value.runtimeType.toString();
}
