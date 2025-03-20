// C++ - Hard

#include "mystring.h"
#include <cstring>
#include <iostream>

MyString::MyString(const char *s)
{
    str = new char[strlen(s) + 1];
    strcpy(str, s);
}

MyString::MyString(const MyString &other)
{
    str = new char[strlen(other.str) + 1];
    strcpy(str, other.str);
}

int MyString::length() const
{
    return strlen(str);
}

const char *MyString::c_str() const
{
    return str;
}

void MyString::append(const MyString &other)
{
    char *temp = new char[length() + other.length() + 1];
    strcpy(temp, str);
    strcat(temp, other.str);
    delete[] str;
    str = temp;
}

int MyString::compare(const MyString &other) const
{
    return strcmp(str, other.str);
}

MyString &MyString::operator=(const MyString &other)
{
    if (this != &other)
    {
        delete[] str;
        str = new char[strlen(other.str) + 1];
        strcpy(str, other.str);
    }
    return *this;
}

MyString MyString::operator+(const MyString &other) const
{
    MyString temp;
    temp.str = new char[length() + other.length() + 1];
    strcpy(temp.str, str);
    strcat(temp.str, other.str);
    return temp;
}

bool MyString::operator==(const MyString &other) const
{
    return strcmp(str, other.str) == 0;
}

std::ostream &operator<<(std::ostream &os, const MyString &s)
{
    os << s.str;
    return os;
}
