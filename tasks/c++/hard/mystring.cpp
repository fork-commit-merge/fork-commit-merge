// // C++ - Hard

// #include "mystring.h"
// #include <cstring>
// #include <iostream>

// // Default constructor
// MyString::MyString() : str(nullptr), len(0) {}

// // Parameterized constructor
// MyString::MyString(const char* s) {
//     // TODO: Implement this
// }

// // Copy constructor
// MyString::MyString(const MyString& other) {
//     // TODO: Implement this
// }

// // Destructor
// MyString::~MyString() {
//     delete[] str;
// }

// int MyString::length() const {
//     // TODO: Implement this
// }

// const char* MyString::c_str() const {
//     // TODO: Implement this
// }

// void MyString::append(const MyString& other) {
//     // TODO: Implement this
// }

// int MyString::compare(const MyString& other) const {
//     // TODO: Implement this
// }

// MyString& MyString::operator=(const MyString& other) {
//     // TODO: Implement this
// }

// MyString MyString::operator+(const MyString& other) const {
//     // TODO: Implement this
// }

// bool MyString::operator==(const MyString& other) const {
//     // TODO: Implement this
// }

// std::ostream& operator<<(std::ostream& os, const MyString& s) {
//     // TODO: Implement this
// }

#include "mystring.h"
#include <cstring>
#include <iostream>

// Constructors and Destructor
MyString::MyString() : data(nullptr), size(0) {}

MyString::MyString(const char* cstr) : data(nullptr), size(0) {
    copyData(cstr);
}

MyString::MyString(const MyString& other) : data(nullptr), size(0) {
    copyData(other.data);
}

MyString::~MyString() {
    clear();
}

// Member functions
int MyString::length() const {
    return size;
}

const char* MyString::c_str() const {
    return data;
}

void MyString::append(const MyString& other) {
    MyString temp(*this);
    clear();
    size = temp.size + other.size;
    data = new char[size + 1];
    strcpy(data, temp.data);
    strcat(data, other.data);
}

int MyString::compare(const MyString& other) const {
    return strcmp(data, other.data);
}

MyString MyString::substring(int start, int end) const {
    if (start < 0) start = 0;
    if (end > size) end = size;
    if (start >= end) return MyString();

    MyString sub;
    sub.size = end - start;
    sub.data = new char[sub.size + 1];
    strncpy(sub.data, data + start, sub.size);
    sub.data[sub.size] = '\0';
    return sub;
}

// Overloaded operators
MyString& MyString::operator=(const MyString& other) {
    if (this != &other) {
        clear();
        copyData(other.data);
    }
    return *this;
}

MyString MyString::operator+(const MyString& other) const {
    MyString result(*this);
    result.append(other);
    return result;
}

bool MyString::operator==(const MyString& other) const {
    return compare(other) == 0;
}

// Helper function to copy data
void MyString::copyData(const char* cstr) {
    if (cstr) {
        size = strlen(cstr);
        data = new char[size + 1];
        strcpy(data, cstr);
    }
}

// Helper function to clear data
void MyString::clear() {
    delete[] data;
    data = nullptr;
    size = 0;
}

// Overloaded stream insertion operator
std::ostream& operator<<(std::ostream& os, const MyString& str) {
    if (str.data)
        os << str.data;
    return os;
}
