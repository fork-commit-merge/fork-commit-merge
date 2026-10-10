// C++ - Hard
#include "mystring.h"

#include <cstring>

// Default constructor: an empty, always-valid string.
MyString::MyString() : data(new char[1]), size(0) {
    data[0] = '\0';
}

// Parameterized constructor: safely copies a C-style string.
MyString::MyString(const char* str) {
    if (str == nullptr) {
        size = 0;
        data = new char[1];
        data[0] = '\0';
        return;
    }

    size = static_cast<int>(std::strlen(str));
    data = new char[static_cast<std::size_t>(size) + 1];
    std::strcpy(data, str);
}

// Copy constructor: deep copy so the two objects own separate buffers.
MyString::MyString(const MyString& other) : data(nullptr), size(0) {
    size = other.size;
    data = new char[static_cast<std::size_t>(size) + 1];
    std::strcpy(data, other.data);
}

// Destructor: releases the dynamically allocated buffer.
MyString::~MyString() {
    delete[] data;
    data = nullptr;
}

// Returns the number of characters in the string.
int MyString::length() const {
    return size;
}

// Returns the underlying C-style string.
const char* MyString::c_str() const {
    return data;
}

// Appends another MyString to this one.
void MyString::append(const MyString& other) {
    if (other.size == 0) {
        return;
    }

    char* newData = new char[static_cast<std::size_t>(size + other.size) + 1];
    std::strcpy(newData, data);
    std::strcat(newData, other.data);

    delete[] data;
    data = newData;
    size += other.size;
}

// Compares two strings lexicographically.
int MyString::compare(const MyString& other) const {
    return std::strcmp(data, other.data);
}

// Assignment operator with self-assignment and deep-copy handling.
MyString& MyString::operator=(const MyString& other) {
    if (this == &other) {
        return *this;
    }

    char* newData = new char[static_cast<std::size_t>(other.size) + 1];
    std::strcpy(newData, other.data);

    delete[] data;
    data = newData;
    size = other.size;

    return *this;
}

// Concatenates two MyString objects.
MyString MyString::operator+(const MyString& other) const {
    MyString result(*this);
    result.append(other);
    return result;
}

// Equality comparison.
bool MyString::operator==(const MyString& other) const {
    return std::strcmp(data, other.data) == 0;
}

// Stream insertion operator.
std::ostream& operator<<(std::ostream& os, const MyString& str) {
    os << str.data;
    return os;
}

// Bonus: returns the substring in the inclusive range [start, end].
MyString MyString::substring(int start, int end) const {
    if (start < 0 || start >= size || end < start) {
        return MyString("");
    }

    if (end >= size) {
        end = size - 1;
    }

    const int subLength = end - start + 1;
    char* buffer = new char[static_cast<std::size_t>(subLength) + 1];
    std::strncpy(buffer, data + start, static_cast<std::size_t>(subLength));
    buffer[subLength] = '\0';

    MyString result(buffer);
    delete[] buffer;
    return result;
}
