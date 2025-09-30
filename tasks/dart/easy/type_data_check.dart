void main() {
  // print(typeDataCheck(5));
  // print(typeDataCheck(3.14));
  // print(typeDataCheck("Hello"));
  // print(typeDataCheck(true));
  // print(typeDataCheck(null));
}

// TODO: Implement a function that accepts a parameter of any type and returns a string describing its data type.
//Function to return the data type of any value
String typeDataCheck(dynamic value) {
  return value.runtimeType.toString();
}
