// C++ - Hard

#include "mystring.h"
#include <cstring>
#include <iostream>

// Default constructor
MyString::MyString() : str(nullptr), len(0) {}

// Parameterized constructor
MyString::MyString(const char* s) {
    // TODO: Implement this
    if (s) {
        len = strlen(s);
        str = new char[len + 1];
        strcpy(str, s);
    } else {
        str = nullptr;
        len = 0;
    }
}

// Copy constructor
MyString::MyString(const MyString& other) {
    // TODO: Implement this
     len = other.len;
    str = new char[len + 1];
    strcpy(str, other.str);
}

// Destructor
MyString::~MyString() {
    delete[] str;
}

int MyString::length() const {
    // TODO: Implement this
    return len;
}

const char* MyString::c_str() const {
    // TODO: Implement this
    return str;
}

void MyString::append(const MyString& other) {
    // TODO: Implement this
    int newLen = len + other.len;
    char* newStr = new char[newLen + 1];
    
    strcpy(newStr, str);
    strcat(newStr, other.str);

    delete[] str;
    str = newStr;
    len = newLen;
}

int MyString::compare(const MyString& other) const {
    // TODO: Implement this
    return strcmp(str, other.str);
}

MyString& MyString::operator=(const MyString& other) {
    // TODO: Implement this
    if (this != &other) {  // Check for self-assignment
        delete[] str;
        len = other.len;
        str = new char[len + 1];
        strcpy(str, other.str);
    }
    return *this;
}

MyString MyString::operator+(const MyString& other) const {
    // TODO: Implement this
    MyString result = *this;  // Copy constructor
    result.append(other);
    return result;
}

bool MyString::operator==(const MyString& other) const {
    // TODO: Implement this
     return compare(other) == 0;
}

std::ostream& operator<<(std::ostream& os, const MyString& s) {
    // TODO: Implement this
     os << s.str;
    return os;
}
