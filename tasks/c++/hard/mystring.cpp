#include "mystring.h"
#include <cstring>
#include <iostream>

// Default constructor
MyString::MyString() : str(new char[1]), len(0) {
    str[0] = '\0';  
}

// Parameterized constructor
MyString::MyString(const char* s) {
    if (s) {
        len = std::strlen(s);
        str = new char[len + 1];
        std::strcpy(str, s);
    } else {
        str = new char[1];
        str[0] = '\0';
        len = 0;
    }
}

// Copy constructor
MyString::MyString(const MyString& other) : len(other.len) {
    str = new char[len + 1];
    std::strcpy(str, other.str);
}

// Destructor
MyString::~MyString() {
    delete[] str;
}

// Return the length of the string
int MyString::length() const {
    return len;
}

// Return the C-style string
const char* MyString::c_str() const {
    return str;
}

// Append another MyString object to this one
void MyString::append(const MyString& other) {
    char* newStr = new char[len + other.len + 1];
    std::strcpy(newStr, str);
    std::strcat(newStr, other.str);

    delete[] str;
    str = newStr;
    len += other.len;
}

// Compare two MyString objects
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

// Add operator to concatenate two MyString objects
MyString MyString::operator+(const MyString& other) const {
    MyString result;
    result.len = len + other.len;
    result.str = new char[result.len + 1];
    std::strcpy(result.str, str);
    std::strcat(result.str, other.str);
    return result;
}

// Equality operator to compare two MyString objects
bool MyString::operator==(const MyString& other) const {
    return std::strcmp(str, other.str) == 0;
}

// Stream insertion operator for printing
std::ostream& operator<<(std::ostream& os, const MyString& s) {
    os << s.str;
    return os;
}

MyString MyString::substring(int start, int end) const {
    if (start < 0 || end > len || start > end) {
        return MyString();
    }
    char* subStr = new char[end - start + 2];
    std::strncpy(subStr, str + start, end - start + 1);
    subStr[end - start + 1] = '\0';
    MyString result(subStr);
    delete[] subStr;
    return result;
}
