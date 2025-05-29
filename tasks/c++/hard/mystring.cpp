// C++ - Hard

#include "mystring.h"
#include <cstring>
#include <iostream>

MyString::MyString()
{
    data = new char[1];
    data[0] = '\0';
}

MyString::MyString(const char *s)
{
    if (s == nullptr)
    {
        data = new char[1];
        data[0] = '\0';
    }
    else
    {
        data = new char[strlen(s) + 1];
        std::strcpy(data, s);
    }
}

MyString::MyString(const MyString &other)
{
    data = new char[strlen(other.data) + 1];
    std::strcpy(data, other.data);
}

MyString::~MyString()
{
    delete[] data;
}

int MyString::length() const
{
    return std::strlen(data);
}

const char *MyString::c_str() const
{
    return data;
}

void MyString::append(const MyString &other)
{
    int new_len = length() + other.length();
    char *new_data = new char[new_len + 1];
    std::strcpy(new_data, data);
    std::strcat(new_data, other.data);
    delete[] data;
    data = new_data;
}

int MyString::compare(const MyString &other) const
{
    return std::strcmp(data, other.data);
}

MyString &MyString::operator=(const MyString &other)
{
    if (this != &other)
    {
        delete[] data;
        data = new char[strlen(other.data) + 1];
        std::strcpy(data, other.data);
    }
    return *this;
}

MyString MyString::operator+(const MyString &other) const
{
    int new_len = length() + other.length();
    char *buffer = new char[new_len + 1];
    std::strcpy(buffer, data);
    std::strcat(buffer, other.data);
    MyString result(buffer);
    delete[] buffer;
    return result;
}

bool MyString::operator==(const MyString &other) const
{
    return std::strcmp(data, other.data) == 0;
}

std::ostream &operator<<(std::ostream &os, const MyString &s)
{
    os << s.data;
    return os;
}
