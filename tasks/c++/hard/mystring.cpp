// C++ - Hard
#define  _CRT_SECURE_NO_WARNINGS
#include "mystring.h"
#include <cstring>
#include <iostream>

// Default constructor
MyString::MyString() : str(nullptr), len(0) {
    str = new char[1];
    str[0] = '\0';
    len = 0;
}

// Parameterized constructor
MyString::MyString(const char* s) {
    // TODO: Implement this
    len = 0;
  
    if (s == nullptr) {
        str = new char[1];
        str[0] = '\0';
    }
    else {
        str = new char[strlen(s) + 1];
        len = strlen(s) + 1;

        strcpy(str, s);
        str[strlen(s)] = '\0';

    }
}

// Copy constructor
MyString::MyString(const MyString& other) {
    // TODO: Implement this
    str = new char[strlen(other.str) + 1];
    strcpy(str, other.str);
    str[strlen(other.str)] = '\0';
    len = strlen(str);
}

// Destructor
MyString::~MyString() {
    delete[] str;
}

int MyString::length() const {
    // TODO: Implement this
    return len;
}

const char* MyString::c_str() const {
    // TODO: Implement this
    return str;
}

void MyString::append(const MyString& other) {
    // TODO: Implement this
    len = (strlen(str) + strlen(other.str));
    strcat(str, other.str);

}

int MyString::compare(const MyString& other) const {
    // TODO: Implement this
    int com=0;
    for (unsigned int i = 0; i <= len; ++i) {
        if (str[i] < other.str[i]) {
            com = -1;
            break;
        }
        else if (str[i] > other.str[i]){
            com = 1;
            break;
        }
    }
    return com;
}

MyString& MyString::operator=(const MyString& other) {
    // TODO: Implement this
    if (this == &other) {
        return *this;
    }
    delete[] str;
    str = new char[strlen(other.str) + 1];
    strcpy(str, other.str);
    len = strlen(other.str);
    return *this;
}

MyString MyString::operator+(const MyString& other) const {
    // TODO: Implement this
    int length = strlen(str) + strlen(other.str);
    MyString temp;
    temp.str = new char[length + 1];

    strcpy(temp.str, str);
    strcat(temp.str, other.str);
    temp.str[length] = '\0';
    temp.len = strlen(temp.str);

    return temp;


}

bool MyString::operator==(const MyString& other) const {
    // TODO: Implement this
    if (len != other.len) {
        return 0;
   }
    for (unsigned int i = 0; i <= len; ++i) {
        if (str[i] != other.str[i]) {
            return 0;
        }
      
    }
    return 1;
}

std::ostream& operator<<(std::ostream& os, const MyString& s) {
    // TODO: Implement this

    os << s.c_str();
    return os;
}
