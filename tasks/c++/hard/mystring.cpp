#include "mystring.h"

#include <cstring>
#include <iostream>

MyString::MyString(const char* s)
{
    size_t s_len = 0;
    char* ptr = const_cast<char*>(s);
    while (*ptr != '\0')
    {
        ++ptr;
        ++s_len;
    }
    len = s_len;
    this->content.reset(new char[len + 1]);
    std::strncpy(this->content.get(), s, len);
}

MyString::MyString(const MyString& other)
{
    char* str = new char[other.len + 1];
    this->len = other.len;
    std::strncpy(str, other.content.get(), len);
    this->content.reset(str);
}

int MyString::length() const
{
    return len;
}

const char* MyString::c_str() const
{
    return this->content.get();
}

void MyString::append(const MyString& other)
{
    char* str = new char[len + other.len + 1];
    std::copy(this->content.get(), this->content.get() + len, str);
    std::strncpy(str + len, other.c_str(), other.len);
    len += other.len;
    this->content.reset(str);
}

int MyString::compare(const MyString& other) const
{
    bool equal = true;
    bool smaller = true;

    if (len != other.len) return 1;

    size_t idx = 0;

    while (idx < len)
    {
        if (this->c_str()[idx] != other.c_str()[idx])
        {
            equal = false;
            smaller = false;
        }
        else if (this->c_str()[idx] != other.c_str()[idx] + 32)
        {
            equal = false;
        }
        ++idx;
    }

    if (equal)
        return 0;
    else if (!equal && smaller)
        return -1;
    else
        return 1;
}

MyString& MyString::operator=(const MyString& other)
{
    char* str = new char[other.len + 1];

    std::strncpy(str, other.content.get(), other.len);

    this->content.reset(str);
    this->len = other.len;

    return *this;
}

MyString MyString::operator+(const MyString& other) const
{
    MyString str(*this);

    str.append(other);

    return str;
}

bool MyString::operator==(const MyString& other) const
{
    if (this->len != other.len) return false;

    size_t idx = 0;

    while (idx < len)
    {
        if (this->c_str()[idx] != other.c_str()[idx]) return false;
        ++idx;
    }

    return true;
}

std::ostream& operator<<(std::ostream& os, const MyString& s)
{
    return os << s.c_str();
}

MyString MyString::substring(int start, int end)
{
    char* sub_str = new char[end - start + 1];

    std::strncpy(sub_str, this->content.get() + start, end - start);

    MyString str(sub_str);

    return str;
}