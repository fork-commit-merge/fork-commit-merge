#include <cstring>
#include <iostream>
#include "mystring.h"

MyString::MyString(const char* s) {
    // TODO: Implement this
    if (s) {
        size_t len = std::strlen(s);
        str_ = new char[len + 1];   // +1 для '\0'
        std::strcpy(str_, s);
    } else {
        str_ = new char[1];
        str_[0] = '\0';
    }
}

MyString::MyString(const MyString& other) {
    str_ = new char[other.length() + 1];
    std::strcpy(str_, other.c_str());
}

int MyString::length() const {
    // TODO: Implement this
    return strlen(str_);
}

const char* MyString::c_str() const {
    // TODO: Implement this
    return str_;
}

void MyString::append(const MyString& other) {
    // TODO: Implement this
    size_t lenNew = length() + other.length();
    char* newStr = new char[lenNew + 1];
    std::strcpy(newStr, c_str());         // копіюємо свій рядок
    std::strcat(newStr, other.c_str());   // додаємо інший
    delete[] str_;                        // звільняємо стару пам’ять
    str_ = newStr;
}

int MyString::compare(const MyString& other) const {
    // TODO: Implement this
    return strcmp(str_, other.c_str());
}

MyString& MyString::operator=(const MyString& other) {
    // TODO: Implement this
    if (this == &other) return *this;
    size_t lenNew = other.length();
    delete[] str_;
    str_ = new char[lenNew + 1];
    std::strcpy(str_, other.c_str());
    return *this;
}

MyString MyString::operator+(const MyString& other) const {
    // TODO: Implement this
    MyString result(*this);
    result.append(other);
    return result;
}

bool MyString::operator==(const MyString& other) const {
    // TODO: Implement this
    return strcmp(c_str(), other.c_str()) == 0;
}

std::ostream &operator<<(std::ostream &os, const MyString &s) {
    // TODO: Implement this
    os << s.c_str();
    return os;
}

MyString::~MyString() {
    delete[] str_;
}


