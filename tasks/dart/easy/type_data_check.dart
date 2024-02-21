String typeDataCheck(dynamic data) {
  if (data == null) {
    return 'Null';
  } else if (data is int) {
    return 'Integer';
  } else if (data is double) {
    return 'Double';
  } else if (data is String) {
    return 'String';
  } else if (data is bool) {
    return 'Boolean';
  } else {
    return 'Unknown Type';
  }
}

void main() {
  print(typeDataCheck(5));       // Output: Integer
  print(typeDataCheck(3.14));    // Output: Double
  print(typeDataCheck("Hello")); // Output: String
  print(typeDataCheck(true));    // Output: Boolean
  print(typeDataCheck(null));    // Output: Null
}
