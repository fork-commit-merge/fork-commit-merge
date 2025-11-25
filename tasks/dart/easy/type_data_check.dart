import 'dart:io';

void main() {
  stdout.write("Enter a value: ");
  String? input = stdin.readLineSync();

  String type = typeDataCheck(input);
  print("Input type: $type");
}

String typeDataCheck(dynamic value) {
  if (value == null) return "null";

  // Always a string when coming from input
  String v = value.toString();

  if (isInt(v)) return "int";
  if (isDouble(v)) return "double";
  if (isBool(v)) return "bool";

  return "String";
}

// ---------- Custom manual parsing functions ----------

bool isInt(String s) {
  // digits only, optional leading minus
  for (int i = 0; i < s.length; i++) {
    int c = s.codeUnitAt(i);
    if (i == 0 && c == 45) {
      // allow leading '-'
      continue;
    }
    if (c < 48 || c > 57) {
      return false;
    }
  }
  return s.isNotEmpty;
}

bool isDouble(String s) {
  int dotCount = 0;

  for (int i = 0; i < s.length; i++) {
    int c = s.codeUnitAt(i);

    // Leading minus allowed
    if (i == 0 && c == 45) continue;

    // One decimal point allowed
    if (c == 46) {
      dotCount++;
      if (dotCount > 1) return false;
      continue;
    }

    // Must be digit
    if (c < 48 || c > 57) return false;
  }

  // must contain exactly one dot to be considered a double
  return dotCount == 1;
}

bool isBool(String s) {
  String lower = s.toLowerCase();
  return lower == "true" || lower == "false";
}
