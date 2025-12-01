// C++ - Hard
// Issue #5595

#include "mystring.h"
#include <cstring>
#include <iostream>

// Default constructor
MyString::MyString() {
    len = 0;
    data = new char[1];
    if (data) {
        data[0] = '\0';
    }
}

// Parameterized constructor
MyString::MyString(const char* s) {
    if (s == nullptr) {
        len = 0;
        data = new char[1];
        if (data) {
            data[0] = '\0';
        }
    } else {
        len = strlen(s);
        data = new char[len + 1];
        if (data) {
            strcpy(data, s);
        }
    }
}

// Copy constructor
MyString::MyString(const MyString& other) {
    len = other.len;
    data = new char[len + 1];
    if (data) {
        strcpy(data, other.data);
    }
}

// Destructor
MyString::~MyString() {
    delete[] data;
}

// Return the length of the string
int MyString::length() const {
    return len;
}

// Return the underlying C-style string
const char* MyString::c_str() const {
    return data;
}

// Append a given MyString object to the current string
void MyString::append(const MyString& other) {
    int newLen = len + other.len;
    char* newData = new char[newLen + 1];
    
    if (newData) {
        strcpy(newData, data);
        strcat(newData, other.data);
        delete[] data;
        data = newData;
        len = newLen;
    }
}

// Compare the current string with a given MyString object
int MyString::compare(const MyString& other) const {
    return strcmp(data, other.data);
}

// Bonus: substring function
MyString MyString::substring(int start, int end) const {
    if (start < 0) start = 0;
    if (end > len) end = len;
    if (start >= end) return MyString();
    
    int subLen = end - start;
    char* subData = new char[subLen + 1];
    
    if (subData) {
        strncpy(subData, data + start, subLen);
        subData[subLen] = '\0';
        MyString result(subData);
        delete[] subData;
        return result;
    }
    
    return MyString();
}

// Assignment operator
MyString& MyString::operator=(const MyString& other) {
    if (this != &other) {
        delete[] data;
        len = other.len;
        data = new char[len + 1];
        if (data) {
            strcpy(data, other.data);
        }
    }
    return *this;
}

// Addition operator (concatenation)
MyString MyString::operator+(const MyString& other) const {
    int newLen = len + other.len;
    char* newData = new char[newLen + 1];
    
    if (newData) {
        strcpy(newData, data);
        strcat(newData, other.data);
        MyString result(newData);
        delete[] newData;
        return result;
    }
    
    return MyString();
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
