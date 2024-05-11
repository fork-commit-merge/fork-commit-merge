// C++ - Hard

#include "mystring.h"
#include <cstring>
#include <iostream>

// Default constructor
MyString::MyString() : str(nullptr), len(0) {}

// Parameterized constructor
MyString::MyString(const char* s) {
    // TODO: Implement this
    len = strlen(s);
    str = new char[len + 1];
    strcpy(str,s);
}

// Copy constructor
MyString::MyString(const MyString& other) {
    // TODO: Implement this
    len = other.len;
    str = new char[len + 1];
    strcpy(str,other.str);
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
    *this = *this + other;
}

int MyString::compare(const MyString& other) const {
    // TODO: Implement this
    return strcmp(str,other.str);
}

MyString& MyString::operator=(const MyString& other) {
    // TODO: Implement this
    len = other.len;
    delete[] str;
    str = new char[len + 1];    
    strcpy(str,other.str);
    return *this;
}

MyString MyString::operator+(const MyString& other) const {
    // TODO: Implement this
    char* result = new char[len + other.len + 1];
    strcpy(result, str);
    strcat(result, other.str);
    MyString temp(result);
    delete[] result;
    return temp;
}

bool MyString::operator==(const MyString& other) const {
    // TODO: Implement this
    return strcmp(str,other.str) == 0;
}

std::ostream& operator<<(std::ostream& os, const MyString& s) {
    // TODO: Implement this
    os << s.str;
	return os;
}
