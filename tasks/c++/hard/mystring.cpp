// C++ - Hard

#include "mystring.h"
#include <cstring>
#include <iostream>

// Default constructor
MyString::MyString() : str(nullptr), len(0) {}

// Parameterized constructor
MyString::MyString(const char* s) {
    len = std::strlen(s);
    str = new char[len + 1];
    std::strcpy(str, s);
}

// Copy constructor
MyString::MyString(const MyString& other) {
    len = other.len;
    str = new char[len + 1];
    std::strcpy(str, other.str);
}

// Destructor
MyString::~MyString() {
    delete[] str;
}

// Length method
int MyString::length() const {
    return len;
}

// C_str method
const char* MyString::c_str() const {
    return str;
}

void MyString::append(const MyString& other) {
    char* newStr = new char[len + other.len + 1];
    std::strcpy(newStr, str);
    std::strcat(newStr, other.str);
    delete[] str;
    str = newStr;
    len += other.len;
}

int MyString::compare(const MyString& other) const {
    return std::strcmp(str, other.str);
}

// Assignment operator
MyString& MyString::operator=(const MyString& other) {
    if (this != &other) {
        delete[] str;
        len = other.len;
        str = new char[len + 1];
        std::strcpy(str, other.str);
    }
    return *this;
}

// Addition operator
MyString MyString::operator+(const MyString& other) const {
    MyString result;
    result.len = len + other.len;
    result.str = new char[result.len + 1];
    std::strcpy(result.str, str);
    std::strcat(result.str, other.str);
    return result;
}

// Equality operator
bool MyString::operator==(const MyString& other) const {
    return std::strcmp(str, other.str) == 0;
}

std::ostream& operator<<(std::ostream& os, const MyString& s) {
    os << s.str;
    return os;
}
