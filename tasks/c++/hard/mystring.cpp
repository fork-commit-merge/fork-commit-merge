// C++ - Hard

#include "mystring.h"
#include <cstring>
#include <iostream>

// Default constructor
MyString::MyString() : str(nullptr), len(0) {}

// Parameterized constructor
MyString::MyString(const char *s)
{
    // TODO: Implement this
    int i = 0;
    while (s[i])
    {
        i++;
        len++;
    }
    str = new char[len + 1];
    for (i = 0; i < len; i++)
    {
        str[i] = s[i];
    }
    str[len] = 0;
}

// Copy constructor
MyString::MyString(const MyString &other)
{
    // TODO: Implement this
    if (this != &other)
    {
        delete[] str;

        len = other.len;
        str = new char[len + 1];
        for (int i = 0; i < len; i++)
        {
            str[i] = other.str[i];
        }
        str[len] = 0;
    }
}

// Destructor
MyString::~MyString()
{
    delete[] str;
}

int MyString::length() const
{
    // TODO: Implement this
    return len;
}

const char *MyString::c_str() const
{
    // TODO: Implement this
    return (const char *)str;
}

void MyString::append(const MyString &other)
{
    // TODO: Implement this
    int newLen = len + other.len;
    int i = 0;
    char *s = new char[newLen + 1];
    for (i = 0; i < len; i++)
    {
        s[i] = str[i];
    }
    for (i = len; i < newLen; i++)
    {
        s[i] = other.str[i - len];
    }
    s[newLen] = 0;
    delete[] str;
    str = s;
    len = newLen;
}

int MyString::compare(const MyString &other) const
{
    // TODO: Implement this
    if (len < other.len)
    {
        return -1;
    }
    if (len > other.len)
    {
        return 1;
    }
    for (int i = 0; i < len; i++)
    {
        if (str[i] < other.str[i])
        {
            return -1;
        }
        if (str[i] > other.str[i])
        {
            return 1;
        }
    }
    return 0;
}

MyString &MyString::operator=(const MyString &other)
{
    // TODO: Implement this
    if (this != &other)
    {
        delete[] str;
        len = other.len;
        str = new char[len + 1];
        for (int i = 0; i < len; i++)
        {
            str[i] = other.str[i];
        }
        str[len] = '\0';
    }

    return *this;
}

MyString MyString::operator+(const MyString &other) const
{
    // TODO: Implement this
    MyString result(*this);
    result.append(other);
    return result;
}

bool MyString::operator==(const MyString &other) const
{
    // TODO: Implement this
    return !compare(other);
}

std::ostream &operator<<(std::ostream &os, const MyString &s)
{
    // TODO: Implement this
    os << s.c_str();
    return os;
}
