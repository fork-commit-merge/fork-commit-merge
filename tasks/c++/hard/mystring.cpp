#include "mystring.h"
#include <cstring>

// Default constructor
MyString::MyString() {
    size = 0;
    data = new char[1];
    data[0] = '\0';
}

// Parameterized constructor
MyString::MyString(const char* str) {
    if (str == nullptr) {
        size = 0;
        data = new char[1];
        data[0] = '\0';
        return;
    }

    size = std::strlen(str);
    data = new char[size + 1];
    std::strcpy(data, str);
}

// Copy constructor
MyString::MyString(const MyString& other) {
    size = other.size;
    data = new char[size + 1];
    std::strcpy(data, other.data);
}

// Destructor
MyString::~MyString() {
    delete[] data;
}

// Return length
int MyString::length() const {
    return size;
}

// Return C-style string
const char* MyString::c_str() const {
    return data;
}

// Append another string
void MyString::append(const MyString& other) {
    char* newData = new char[size + other.size + 1];

    std::strcpy(newData, data);
    std::strcat(newData, other.data);

    delete[] data;

    data = newData;
    size += other.size;
}

// Compare strings
int MyString::compare(const MyString& other) const {
    return std::strcmp(data, other.data);
}

// Assignment operator
MyString& MyString::operator=(const MyString& other) {
    if (this == &other) {
        return *this;
    }

    char* newData = new char[other.size + 1];
    std::strcpy(newData, other.data);

    delete[] data;

    data = newData;
    size = other.size;

    return *this;
}

// + operator
MyString MyString::operator+(const MyString& other) const {
    MyString result(*this);
    result.append(other);
    return result;
}

// == operator
bool MyString::operator==(const MyString& other) const {
    return std::strcmp(data, other.data) == 0;
}

// << operator
std::ostream& operator<<(std::ostream& os, const MyString& str) {
    os << str.data;
    return os;
}

// Bonus substring
MyString MyString::substring(int start, int end) const {
    if (start < 0 || end < start || start >= size) {
        return MyString("");
    }

    if (end >= size) {
        end = size - 1;
    }

    int subLength = end - start + 1;

    char* buffer = new char[subLength + 1];

    std::strncpy(buffer, data + start, subLength);
    buffer[subLength] = '\0';

    MyString result(buffer);

    delete[] buffer;

    return result;
}