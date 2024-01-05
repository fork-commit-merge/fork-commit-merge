// C++ - Hard

#ifndef MYSTRING_H
#define MYSTRING_H

#include <cstring>
#include <iostream>

class MyString {
private:
    char* str;
    int len;

public:
    // Default constructor
    MyString() : str(nullptr), len(0) {}

    // Parameterized constructor
    MyString(const char* s) {
        len = std::strlen(s);
        str = new char[len + 1];
        std::strcpy(str, s);
    }

    // Copy constructor
    MyString(const MyString& other) {
        len = other.len;
        str = new char[len + 1];
        std::strcpy(str, other.str);
    }

    // Destructor
    ~MyString() {
        delete[] str;
    }

    // Assignment operator
    MyString& operator=(const MyString& other) {
        if (this != &other) {
            delete[] str;
            len = other.len;
            str = new char[len + 1];
            std::strcpy(str, other.str);
        }
        return *this;
    }

    // Addition operator
    MyString operator+(const MyString& other) const {
        MyString result;
        result.len = len + other.len;
        result.str = new char[result.len + 1];
        std::strcpy(result.str, str);
        std::strcat(result.str, other.str);
        return result;
    }

    // Equality operator
    bool operator==(const MyString& other) const {
        return std::strcmp(str, other.str) == 0;
    }

    // Length method
    int length() const {
        return len;
    }

    // C_str method
    const char* c_str() const {
        return str;
    }

    // Append method
    void append(const MyString& other) {
        char* newStr = new char[len + other.len + 1];
        std::strcpy(newStr, str);
        std::strcat(newStr, other.str);
        delete[] str;
        str = newStr;
        len += other.len;
    }

    // Compare method
    int compare(const MyString& other) const {
        return std::strcmp(str, other.str);
    }

    // Output operator
    friend std::ostream& operator<<(std::ostream& os, const MyString& s) {
        os << s.str;
        return os;
    }
};

#endif
