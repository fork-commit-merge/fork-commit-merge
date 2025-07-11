void main() {
  print(typeDataCheck(5));
  print(typeDataCheck(3.14));
  print(typeDataCheck("Hello"));
  print(typeDataCheck(true));
  print(typeDataCheck(null));
}

String typeDataCheck(dynamic data) {
  if (data == null) {
    return 'Data is null';
  } else if (data is int) {
    return 'Data is an integer';
  } else if (data is double) {
    return 'Data is a double';
  } else if (data is String) {
    return 'Data is a string';
  } else if (data is bool) {
    return 'Data is a boolean';
  }
  return 'Data type is unknown';
}
