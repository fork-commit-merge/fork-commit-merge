void main() {
  print(typeDataCheck(5));
  print(typeDataCheck(3.14));
  print(typeDataCheck("Hello"));
  print(typeDataCheck(true));
  print(typeDataCheck(null));
}

String typeDataCheck(dynamic data) {
  return data.runtimeType.toString();
}