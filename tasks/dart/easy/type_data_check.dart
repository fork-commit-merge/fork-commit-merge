void main() {
  print(typeDataCheck(42));        // "int"
  print(typeDataCheck(3.14));      // "double"
  print(typeDataCheck(true));      // "bool"
  print(typeDataCheck("hello"));   // "String"
  print(typeDataCheck([1, 2, 3])); // "List"
  print(typeDataCheck({'a': 1}));  // "Map"
  print(typeDataCheck(null));      // "null"
  print(typeDataCheck({'x'}));     // "Set"
}

String typeDataCheck(dynamic value) {
  // Manually checking types without using built-in helpers
  if (value == null) {
    return "null";
  }

  // Check number types
  if (value is int) {
    return "int";
  }
  if (value is double) {
    return "double";
  }

  // Check other primitives
  if (value is bool) {
    return "bool";
  }
  if (value is String) {
    return "String";
  }

  // Collections
  if (value is List) {
    return "List";
  }
  if (value is Map) {
    return "Map";
  }
  if (value is Set) {
    return "Set";
  }

  // Fallback
  return "unknown";
}
