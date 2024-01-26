// C++ - Hard

#ifndef MYSTRING_H
#define MYSTRING_H
#include <iostream>

class MyString {
private:
    char* str;
    int len;

public:
    // Constructors
    MyString() : str(nullptr), len(0) {}
    
    MyString(const char* s) {
        if (s == nullptr) {
            str = nullptr;
            len = 0;
        } else {
            len = strlen(s);
            str = new char[len + 1];
            strcpy(str, s);
        }
    }

    MyString(const MyString& other) : str(nullptr), len(other.len) {
        if (other.str != nullptr) {
            str = new char[len + 1];
            strcpy(str, other.str);
        }
    }

    // Destructor
    ~MyString() {
        delete[] str;
    }

    // Member functions
    int length() const {
        return len;
    }

    const char* c_str() const {
        return str;
    }

    void append(const MyString& other) {
        char* temp = new char[len + other.len + 1];
        strcpy(temp, str);
        strcat(temp, other.str);
        delete[] str;
        str = temp;
        len += other.len;
    }

    int compare(const MyString& other) const {
        return strcmp(str, other.str);
    }

    // Overloaded operators
    MyString& operator=(const MyString& other) {
        if (this != &other) {
            delete[] str;
            len = other.len;
            if (other.str != nullptr) {
                str = new char[len + 1];
                strcpy(str, other.str);
            } else {
                str = nullptr;
            }
        }
        return *this;
    }

    MyString operator+(const MyString& other) const {
        MyString result(*this);
        result.append(other);
        return result;
    }

    bool operator==(const MyString& other) const {
        return strcmp(str, other.str) == 0;
    }

    friend std::ostream& operator<<(std::ostream& os, const MyString& str) {
        os << str.c_str();
        return os;
    }

    // Bonus function
    MyString substring(int start, int end) const {
        if (start < 0 || end >= len || start > end) {
            return MyString();
        }
        char* sub = new char[end - start + 2];
        strncpy(sub, str + start, end - start + 1);
        sub[end - start + 1] = '\0';
        MyString result(sub);
        delete[] sub;
        return result;
    }
};

#endif
