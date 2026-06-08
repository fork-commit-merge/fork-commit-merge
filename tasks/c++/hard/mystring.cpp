// C++ - Hard

#include "mystring.h"
#include <cstring>
#include <iostream>
#include <stdexcept>

// Default constructor
MyString::MyString() : data(nullptr), len(0) {
    data = new char[1];
    data[0] = '\0';
}

// Parameterized constructor
MyString::MyString(const char* s) : data(nullptr), len(0) {
    if (s == nullptr) {
        data = new char[1];
        data[0] = '\0';
        len = 0;
    } else {
        len = strlen(s);
        data = new char[len + 1];
        strcpy(data, s);
    }
}

// Copy constructor
MyString::MyString(const MyString& other) : data(nullptr), len(other.len) {
    data = new char[len + 1];
    strcpy(data, other.data);
}

// Destructor
MyString::~MyString() {
    delete[] data;
}

// Return length of string
int MyString::length() const {
        return len;
}

// Return C-style string
const char* MyString::c_str() const {
        return data;
}

// Append another MyString
void MyString::append(const MyString& other) {
        int newLen = len + other.len;
    char* newData = new char[newLen + 1];
    strcpy(newData, data);
    strcat(newData, other.data);
    delete[] data;
    data = newData;
    len = newLen;
}

// Compare with another MyString
int MyString::compare(const MyString& other) const {
        return strcmp(data, other.data);
}

// Assignment operator
MyString& MyString::operator=(const MyString& other) {
        if (this == &other) {
        return *this;
        }
    delete[] data;
    len = other.len;
    data = new char[len + 1];
    strcpy(data, other.data);
    return *this;
}

// Addition operator (concatenation)
MyString MyString::operator+(const MyString& other) const {
        int newLen = len + other.len;
    char* newData = new char[newLen + 1];
    strcpy(newData, data);
    strcat(newData, other.data);
    MyString result(newData);
    delete[] newData;
    return result;
}

// Equality operator
bool MyString::operator==(const MyString& other) const {
        return strcmp(data, other.data) == 0;
}

// Stream insertion operator
std::ostream& operator<<(std::ostream& os, const MyString& s) {
        os << s.data;
    return os;
}

// Bonus: substring
MyString MyString::substring(int start, int end) const {
        if (start < 0 || end > len || start > end) {
        throw std::out_of_range("Invalid substring indices");
        }
    int subLen = end - start;
    char* subData = new char[subLen + 1];
    strncpy(subData, data + start, subLen);
    subData[subLen] = '\0';
    MyString result(subData);
    delete[] subData;
    return result;
}
