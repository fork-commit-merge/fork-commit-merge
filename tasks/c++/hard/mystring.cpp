#include "mystring.h"

#include <cstring>
#include <iostream>


void MyString::__add_data_length(int len)
{
    // std::cout << len << std::endl;

    char* new_data = new char[_data_length + len + 1];

    if (_data_length > 0)
    {
        memcpy(new_data, _data, _data_length);
        delete[] _data;
    }

    _data_length += len + 1;

    _data = new_data;
}

MyString::MyString(const char* s) {
    int n = strlen(s);

    __add_data_length(n);
    _length = n;

    strcpy(_data, s);
}

MyString::MyString()
{
}

MyString::MyString(const MyString& other) {
    int n = other.length();

    __add_data_length(n);
    _length = n;

    strcpy(_data, other.c_str());
}

MyString::~MyString()
{
    if (_data_length > 0) delete[] _data;
}

int MyString::length() const {
    return _length;
}

const char* MyString::c_str() const {
    return _data;
}

void MyString::append(const MyString& other) {
    int n = other.length();
    while (n + _length > _data_length)
        __add_data_length(_data_length);

    for (int i = 0; i < n; i++) {_data[i + _length] = other[i];}
    _data[n + _length] = 0;
    _length = n + _length;
}

int MyString::compare(const MyString& other) const {
    return strcmp(_data, other.c_str());
}

MyString& MyString::operator=(const MyString& other) {
    while (_data_length < other.length())
        __add_data_length(_data_length);

    for (int i = 0; i < other.length(); i++)
        _data[i] = other[i];

    _data[other.length()] = 0;
    _length = other.length();
    return *this;
}

MyString MyString::operator+(const MyString& other) const {
    MyString result(*this);
    result.append(other);
    return result;
}

bool MyString::operator==(const MyString& other) const {
    return MyString::compare(other) == 0;
}

std::ostream& operator<<(std::ostream& os, const MyString& s) {
    os << s.c_str();
    return os;
}

char& MyString::operator[](int i) const
{
    return _data[i];
}
char& MyString::operator[](int i)
{
    return _data[i];
}