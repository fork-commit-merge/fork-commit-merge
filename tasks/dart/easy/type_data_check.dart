void main() {
  print(typeDataCheck(5));
  print(typeDataCheck(3.14));
  print(typeDataCheck("Hello"));
  print(typeDataCheck(true));
  print(typeDataCheck(null));
}

String typeDataCheck(dynamic variable) {
  if (variable is int) {
    return 'int';
  } else if (variable is double) {
    return 'double';
  } else if (variable is String) {
    return 'String';
  } else if (variable is bool) {
    return 'bool';
  } else if (variable == null) {
    return 'null';
  } else {
    return 'Unknown';
  }
}
