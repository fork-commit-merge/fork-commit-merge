void main() {
  print(typeDataCheck(5));       
  print(typeDataCheck(3.14));    
  print(typeDataCheck("Hello")); 
  print(typeDataCheck(true));    
  print(typeDataCheck(null));    
}

String typeDataCheck(dynamic value) {
  if (value == null) {
    return "null";
  } else if (value is int) {
    return "int";
  } else if (value is double) {
    return "double";
  } else if (value is String) {
    return "String";
  } else if (value is bool) {
    return "bool";
  } else {
    return "Unknown type";
  }
}
