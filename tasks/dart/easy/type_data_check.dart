void main() {
  // print(typeDataCheck(5));
  // print(typeDataCheck(3.14));
  // print(typeDataCheck("Hello"));
  // print(typeDataCheck(true));
  // print(typeDataCheck(null));
}


/**
 * 获取数据类型
 *
 * @param value
 * @return String
 * int
 * double
 * String
 * bool
 * Null
 */
String typeDataCheck(dynamic value) {
  if (value == null) {
    return 'null';
  }

  
  return value.runtimeType.toString();
}



/**
 * 获取数据类型
 *
 * @param value
 * @return Type
 * int
 * double
 * String
 * bool
 * Null
 */
Type typeDataCheckToType(dynamic value) {
  if (value == null) {
    return Null;
  }

  return value.runtimeType;
}
