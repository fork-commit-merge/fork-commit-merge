#ifndef MYSTRING_H
#define MYSTRING_H

#include <iostream>

class MyString {
private:
    char* data;
    int size;

public:
    MyString();
    MyString(const char* str);
    MyString(const MyString& other);
    ~MyString();

    int length() const;
    const char* c_str() const;

    void append(const MyString& other);
    int compare(const MyString& other) const;

    MyString& operator=(const MyString& other);
    MyString operator+(const MyString& other) const;
    bool operator==(const MyString& other) const;

    friend std::ostream& operator<<(std::ostream& os, const MyString& str);

    // Bonus
    MyString substring(int start, int end) const;
};

#endif