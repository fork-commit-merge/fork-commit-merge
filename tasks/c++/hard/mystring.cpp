#include "mystring.h"

#include <cstring>
#include <iostream>

MyString::MyString(const char* s) : content(s)
{
    size_t s_len = 0;
    char* ptr = const_cast<char*>(s);
    while (ptr != '\0')
    {
        ++ptr;
        ++s_len;
    }
    len = s_len;
}

MyString::MyString(const MyString& other)
{
    this->content.reset();
    this->content;
}

int MyString::length() const
{
    // TODO: Implement this
}

const char* MyString::c_str() const
{
    // TODO: Implement this
}

void MyString::append(const MyString& other)
{
    // TODO: Implement this
}

int MyString::compare(const MyString& other) const
{
    // TODO: Implement this
}

MyString& MyString::operator=(const MyString& other)
{
    // TODO: Implement this
}

MyString MyString::operator+(const MyString& other) const
{
    // TODO: Implement this
}

bool MyString::operator==(const MyString& other) const
{
    // TODO: Implement this
}

std::ostream& operator<<(std::ostream& os, const MyString& s)
{
    // TODO: Implement this
}
