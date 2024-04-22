String typeDataCheck(dynamic input) {
  if (input is int) {
    return "int";
  } else if (input is double) {
    return "double";
  } else if (input is String) {
    return "String";
  } else if (input is bool) {
    return "bool";
  } else if (input is List) {
    return "List";
  } else if (input is Map) {
    return "Map";
  } else if (input is Set) {
    return "Set";
  } else {
    return "Unknown";
  }
}

void main() {
  print(typeDataCheck(42));            // int
  print(typeDataCheck(3.14));          // double
  print(typeDataCheck("hello"));       // String
  print(typeDataCheck([1, 2, 3]));     // List
  print(typeDataCheck({"key": "value"})); // Map
  print(typeDataCheck(true));          // bool
  print(typeDataCheck({1, 2, 3}));     // Set
}
