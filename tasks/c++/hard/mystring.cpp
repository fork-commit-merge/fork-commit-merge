#include <cstring>
#include <iostream>
#include "mystring.h"

MyString::MyString() : str(nullptr) {}

MyString::MyString(const char* s) {
    if (s) {
        str = new char[strlen(s) + 1];
        strcpy(str, s);
    } else {
        str = nullptr;
    }
}

MyString::MyString(const MyString& other) {
    if (other.str) {
        str = new char[strlen(other.str) + 1];
        strcpy(str, other.str);
    } else {
        str = nullptr;
    }
}

MyString::~MyString() {
    delete[] str;
}

int MyString::length() const {
    return str ? strlen(str) : 0;
}

const char* MyString::c_str() const {
    return str ? str : "";
}

void MyString::append(const MyString& other) {
    if (other.str) {
        int newLength = length() + strlen(other.str) + 1;
        char* newStr = new char[newLength];
        strcpy(newStr, str ? str : "");
        strcat(newStr, other.str);
        delete[] str;
        str = newStr;
    }
}

int MyString::compare(const MyString& other) const {
    if (!str && !other.str) return 0;
    if (!str) return -1;
    if (!other.str) return 1;
    return strcmp(str, other.str);
}

MyString& MyString::operator=(const MyString& other) {
    if (this != &other) {
        delete[] str;
        if (other.str) {
            str = new char[strlen(other.str) + 1];
            strcpy(str, other.str);
        } else {
            str = nullptr;
        }
    }
    return *this;
}

MyString MyString::operator+(const MyString& other) const {
    int newLength = length() + other.length() + 1;
    char* newStr = new char[newLength];
    strcpy(newStr, str ? str : "");
    strcat(newStr, other.str ? other.str : "");
    MyString temp(newStr);
    delete[] newStr;
    return temp;
}

bool MyString::operator==(const MyString& other) const {
    return compare(other) == 0;
}

std::ostream& operator<<(std::ostream& os, const MyString& s) {
    os << (s.str ? s.str : "");
    return os;
}
