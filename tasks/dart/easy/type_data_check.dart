String typeDataCheck(dynamic input) {
  if (input == null) {
    return 'Null';
  } else if (input is String) {
    return 'String';
  } else if (input is int) {
    return 'int';
  } else if (input is double) {
    return 'double';
  } else if (input is bool) {
    return 'bool';
  } else if (input is List) {
    return 'List';
  } else if (input is Map) {
    return 'Map';
  } else {
    return 'Unknown';
  }
}

void main() {
  // Examples of using typeDataCheck function
  print(typeDataCheck(42));        // Output: int
  print(typeDataCheck(3.14));      // Output: double
  print(typeDataCheck('Dart'));    // Output: String
  print(typeDataCheck(true));      // Output: bool
  print(typeDataCheck(null));      // Output: Null
  print(typeDataCheck([1, 2, 3])); // Output: List
  print(typeDataCheck({'a': 1}));  // Output: Map
  print(typeDataCheck(DateTime.now())); // Output: Unknown
}
