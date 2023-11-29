#include "mystring.h"
#include <cstring>
#include <iostream>

MyString::MyString() : data(nullptr) {
}

MyString::MyString(const char* str) {
    if (str) {
        data = new char[strlen(str) + 1];
        strcpy(data, str);
    } else {
        data = nullptr;
    }
}

MyString::MyString(const MyString& other) {
    if (other.data) {
        data = new char[strlen(other.data) + 1];
        strcpy(data, other.data);
    } else {
        data = nullptr;
    }
}

MyString::~MyString() {
    delete[] data;
}

int MyString::length() const {
    return data ? strlen(data) : 0;
}

const char* MyString::c_str() const {
    return data;
}

MyString& MyString::append(const MyString& other) {
    if (!other.data) return *this;
    if (!data) {
        data = new char[strlen(other.data) + 1];
        strcpy(data, other.data);
    } else {
        char* temp = new char[length() + strlen(other.data) + 1];
        strcpy(temp, data);
        strcat(temp, other.data);
        delete[] data;
        data = temp;
    }
    return *this;
}

int MyString::compare(const MyString& other) const {
    if (!data) return other.data ? -1 : 0;
    if (!other.data) return 1;
    return strcmp(data, other.data);
}

MyString& MyString::operator=(const MyString& other) {
    if (this != &other) {
        delete[] data;
        if (other.data) {
            data = new char[strlen(other.data) + 1];
            strcpy(data, other.data);
        } else {
            data = nullptr;
        }
    }
    return *this;
}

MyString MyString::operator+(const MyString& other) const {
    MyString result;
    result.append(*this);
    result.append(other);
    return result;
}

bool MyString::operator==(const MyString& other) const {
    return compare(other) == 0;
}

std::ostream& operator<<(std::ostream& os, const MyString& obj) {
    os << obj.c_str();
    return os;
}

MyString MyString::substring(int start, int end) const {
    if (!data || start < 0 || start >= length() || end < start || end > length()) {
        return MyString();
    }
    char* subStr = new char[end - start + 2];
    strncpy(subStr, data + start, end - start + 1);
    subStr[end - start + 1] = '\0';
    MyString result(subStr);
    delete[] subStr;
    return result;
}
