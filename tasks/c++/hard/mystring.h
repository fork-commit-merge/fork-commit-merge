// C++ - Hard

#ifndef MYSTRING_H
#define MYSTRING_H
#include <iostream>

class MyString
{
    // TODO: Implement MyString class
public:
    MyString();
    MyString(const char *s);
    MyString(const MyString &other);
    ~MyString();

    int length() const;
    const char *c_str() const;
    void append(const MyString &other);
    int compare(const MyString &string2) const;

    MyString &operator=(const MyString &other);
    MyString operator+(const MyString &string2) const;
    bool operator==(const MyString &other) const;

private:
    int len = 0;
    char *str = nullptr;
};

std::ostream &operator<<(std::ostream &os, const MyString &s);

#endif
