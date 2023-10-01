String typeDataCheck(dynamic value) {
  if (value == null) {
    return "Null";
  } else if (value is int) {
    return "Integer";
  } else if (value is double) {
    return "Double";
  } else if (value is String) {
    return "String";
  } else if (value is bool) {
    return "Boolean";
  } else {
    return "Unknown";
  }
}

void main() {
  print(typeDataCheck(5));         // Output: Integer
  print(typeDataCheck(3.14));      // Output: Double
  print(typeDataCheck("Hello"));   // Output: String
  print(typeDataCheck(true));      // Output: Boolean
  print(typeDataCheck(null));      // Output: Null
  print(typeDataCheck([]));        // Output: Unknown
}

