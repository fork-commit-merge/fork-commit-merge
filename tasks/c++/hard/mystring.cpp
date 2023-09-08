// C++ - Hard

#include "mystring.h"
#include <cstring>
#include <iostream>

// Default constructor
MyString::MyString() : str(nullptr), len(0) {}

// Parameterized constructor
MyString::MyString(const char* s) {
    // TODO: Implement this
}

// Copy constructor
MyString::MyString(const MyString& other) {
    // TODO: Implement this
}

// Destructor
MyString::~MyString() {
    delete[] str;
}

int MyString::length() const {
    // TODO: Implement this
}

const char* MyString::c_str() const {
    // TODO: Implement this
}

void MyString::append(const MyString& other) {
    // TODO: Implement this
}

int MyString::compare(const MyString& other) const {
    // TODO: Implement this
}

MyString& MyString::operator=(const MyString& other) {
    // TODO: Implement this
}

MyString MyString::operator+(const MyString& other) const {
    // TODO: Implement this
}

bool MyString::operator==(const MyString& other) const {
    // TODO: Implement this
}

std::ostream& operator<<(std::ostream& os, const MyString& s) {
    // TODO: Implement this
}
