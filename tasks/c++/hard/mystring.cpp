#include "mystring.h"
#include <cstring>
#include <iostream>
#include <new>

MyString::MyString() : data(nullptr), len(0) {
    data = new (std::nothrow) char[1];
    if (data) {
        data[0] = '\0';
    }
}

MyString::MyString(const char* s) : data(nullptr), len(0) {
    // A null pointer is treated as an empty string
    const char* src = (s != nullptr) ? s : "";
    int n = static_cast<int>(std::strlen(src));
    data = new (std::nothrow) char[n + 1];
    if (data) {
        std::strcpy(data, src);
        len = n;
    } else {
        std::cerr << "MyString: memory allocation failed" << std::endl;
    }
}

MyString::MyString(const MyString& other) : data(nullptr), len(0) {
    const char* src = (other.data != nullptr) ? other.data : "";
    int n = (other.data != nullptr) ? other.len : 0;
    data = new (std::nothrow) char[n + 1];
    if (data) {
        std::strcpy(data, src);
        len = n;
    } else {
        std::cerr << "MyString: memory allocation failed" << std::endl;
    }
}

MyString::~MyString() {
    delete[] data;
    data = nullptr;
    len = 0;
}

int MyString::length() const {
    return len;
}

const char* MyString::c_str() const {
    return data ? data : "";
}

void MyString::append(const MyString& other) {
    if (other.data == nullptr || other.len == 0) {
        return;
    }
    // Copy length first so self-append (s.append(s)) is safe
    int otherLen = other.len;
    int newLen = len + otherLen;
    char* newData = new (std::nothrow) char[newLen + 1];
    if (!newData) {
        std::cerr << "MyString: memory allocation failed" << std::endl;
        return; // leave the current string untouched
    }
    if (data) {
        std::strcpy(newData, data);
    } else {
        newData[0] = '\0';
    }
    std::strcat(newData, other.data);
    delete[] data;
    data = newData;
    len = newLen;
}

int MyString::compare(const MyString& other) const {
    return std::strcmp(c_str(), other.c_str());
}

MyString& MyString::operator=(const MyString& other) {
    if (this == &other) {
        return *this; // self-assignment guard
    }
    int n = (other.data != nullptr) ? other.len : 0;
    char* newData = new (std::nothrow) char[n + 1];
    if (!newData) {
        std::cerr << "MyString: memory allocation failed" << std::endl;
        return *this; // keep old contents
    }
    if (other.data) {
        std::strcpy(newData, other.data);
    } else {
        newData[0] = '\0';
    }
    delete[] data;
    data = newData;
    len = n;
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

MyString MyString::substring(int start, int end) const {
    if (data == nullptr || len == 0 || start > end) {
        return MyString();
    }
    if (start < 0) start = 0;
    if (end >= len) end = len - 1;
    if (start > end) {
        return MyString();
    }
    int n = end - start + 1;
    char* buf = new (std::nothrow) char[n + 1];
    if (!buf) {
        std::cerr << "MyString: memory allocation failed" << std::endl;
        return MyString();
    }
    std::strncpy(buf, data + start, n);
    buf[n] = '\0';
    MyString result(buf);
    delete[] buf;
    return result;
}

std::ostream& operator<<(std::ostream& os, const MyString& s) {
    os << s.c_str();
    return os;
}