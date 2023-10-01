void main() {
  print(typeDataCheck(5));
  print(typeDataCheck(3.14));
  print(typeDataCheck("Hello"));
  print(typeDataCheck(true));
  print(typeDataCheck(null));
}

String? typeDataCheck(arg) {
  if (arg is int) {
    return "int";
  } else if (arg is double) {
    return "double";
  } else if (arg is String) {
    return "String";
  } else if (arg is bool) {
    return "bool";
  } else if (arg is List) {
    return "List";
  } else if (arg is Map) {
    return "Map";
  } else if (arg == null) {
    return "null";
  } else {
    return "Unknown";
  }
}
