#include "mystring.h"
#include <cstring> 
#include <iostream>

MyString::MyString() {
    data = new char[1];
    data[0] = '\0';
    len = 0;
}

MyString::MyString(const char* s) {
    len = std::strlen(s);
    data = new char[len + 1];
    std::strcpy(data, s);
}

MyString::MyString(const MyString& other) {
    len = other.len;
    data = new char[len + 1];
    std::strcpy(data, other.data);
}

MyString::~MyString() {
    delete[] data;
}

int MyString::length() const {
    return len;
}

const char* MyString::c_str() const {
    return data;
}

void MyString::append(const MyString& other) {
    char* newData = new char[len + other.len + 1];
    std::strcpy(newData, data);
    std::strcat(newData, other.data);
    delete[] data;
    data = newData;
    len += other.len;
}

int MyString::compare(const MyString& other) const {
    return std::strcmp(data, other.data);
}

MyString& MyString::operator=(const MyString& other) {
    if (this != &other) {
        delete[] data;
        len = other.len;
        data = new char[len + 1];
        std::strcpy(data, other.data);
    }
    return *this;
}

MyString MyString::operator+(const MyString& other) const {
    MyString result;
    delete[] result.data;
    result.len = len + other.len;
    result.data = new char[result.len + 1];
    std::strcpy(result.data, data);
    std::strcat(result.data, other.data);
    return result;
}

bool MyString::operator==(const MyString& other) const {
    return std::strcmp(data, other.data) == 0;
}

std::ostream& operator<<(std::ostream& os, const MyString& s) {
    os << s.data;
    return os;
}
