// C++ - Hard

#ifndef MYSTRING_H
#define MYSTRING_H
#include <iostream>

class MyString {
    // TODO: Implement MyString class 
    char* str;
    int len;
public:
    MyString();
    ~MyString();
    MyString(const MyString& other);
    MyString(const char* s);

    int length()  const;
    const char* c_str() const;
    void append(const MyString& other);
    int compare(const MyString& other) const;
    MyString& operator=(const MyString& other);
    MyString operator+(const MyString& other) const;
    bool operator==(const MyString& other) const;


   
};

    std::ostream& operator<<(std::ostream& os, const MyString& s);
#endif

