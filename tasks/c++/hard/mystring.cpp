#include <cstring>
#include <iostream>
#include "mystring.h"


MyString::MyString() : data(nullptr), len(0) {
        data = new char[1];  
        data[0] = '\0';      
    }

MyString::MyString(const char* s) {
    // TODO: Implement this
    if (s) {  
            len = std::strlen(s); 
            data = new char[len + 1];  
            std::strcpy(data, s);  
        } else {
            len = 0;  
            data = new char[1];
            data[0] = '\0';
        }
}

MyString::MyString(const MyString& other) {
    // TODO: Implement this
    len = other.len;  
        if (other.data) {  
            data = new char[len + 1];  
            std::strcpy(data, other.data);  
        } else {
            data = new char[1];
            data[0] = '\0';
        }
}

MyString::~MyString() {
        delete[] data;
    }

int MyString::length() const {
    // TODO: Implement this
    return len;
}

const char* MyString::c_str() const {
    // TODO: Implement this
    return data;
}

void MyString::append(const MyString& other) {
    // TODO: Implement this
    int newLength = len + other.len;  
        char* newData = new char[newLength + 1];  
        if (data) {  
            std::strcpy(newData, data);
        }
        if (other.data) {  
            std::strcat(newData, other.data);
        }
        delete[] data;  
        data = newData;  
        len = newLength;  
}

int MyString::compare(const MyString& other) const {
    // TODO: Implement this
    return std::strcmp(data, other.data);
}

MyString& MyString::operator=(const MyString& other) {
    // TODO: Implement this
        if (this == &other) {  
            return *this;
        }
        delete[] data;  
        len = other.len;  
        if (other.data) {  
            data = new char[len + 1];  
            std::strcpy(data, other.data);  
        } else {
            data = new char[1];
            data[0] = '\0';
        }
        return *this;  
}

MyString MyString::operator+(const MyString& other) const {
    // TODO: Implement this
    MyString temp;  
        temp.len = len + other.len;  
        temp.data = new char[temp.len + 1];  
        if (data) {  
            std::strcpy(temp.data, data);
        }
        if (other.data) {  
            std::strcat(temp.data, other.data);
        }
        return temp;  
}

bool MyString::operator==(const MyString& other) const {
    return compare(other) == 0;
}

std::ostream& operator<<(std::ostream& os, const MyString& s) {
    // TODO: Implement this
    os << s.data;  
    return os;  
}
