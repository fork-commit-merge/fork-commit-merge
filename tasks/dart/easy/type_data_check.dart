// TODO: Implement a function that accepts a parameter of any type and returns a string describing its data type.

String typeDataCheck(dynamic data) {
  return data.runtimeType.toString();
}

void main() {
  print(typeDataCheck(5));
  print(typeDataCheck(3.14));
  print(typeDataCheck("Hello"));
  print(typeDataCheck(true));
  print(typeDataCheck(null));
}
