// C++ - Hard

//! Don't mmodify this file!

#include "mystring.h"
#include <iostream>

int main() {
    MyString str1("Hello");
    MyString str2(" World");
    MyString str3;

    str3 = str1 + str2;
    std::cout << str3 << std::endl; // Should print: Hello World

    str1.append(str2);
    if (str1 == str3) {
        std::cout << "Both strings are equal!" << std::endl;
    }

    return 0;
}
