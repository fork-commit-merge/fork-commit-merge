#include <cstring>
#include <iostream>

MyString::MyString(const char* s) {
    if (s == nullptr) {
        len = 0;
        data = new char[1];
        data[0] = '\0';
    } else {
        len = std::strlen(s);
        data = new char[len + 1];
        std::strcpy(data, s);
    }
}

MyString::MyString(const MyString& other) {
    len = other.len;
    data = new char[len + 1];
    std::strcpy(data, other.data);
}

int MyString::length() const {
    return len;
}

const char* MyString::c_str() const {
    return data;
}

void MyString::append(const MyString& other) {
    int new_len = len + other.len;
    char* new_data = new char[new_len + 1];

    std::strcpy(new_data, data);
    std::strcat(new_data, other.data);

    delete[] data;
    data = new_data;
    len = new_len;
}

int MyString::compare(const MyString& other) const {
    return std::strcmp(data, other.data);
}

MyString& MyString::operator=(const MyString& other) {
    if (this != &other) { // Self-assignment check
        delete[] data;

        len = other.len;
        data = new char[len + 1];
        std::strcpy(data, other.data);
    }
    return *this;
}

MyString MyString::operator+(const MyString& other) const {
    MyString temp(*this);
    temp.append(other);
    return temp;
}

bool MyString::operator==(const MyString& other) const {
    return std::strcmp(data, other.data) == 0;
}

std::ostream& operator<<(std::ostream& os, const MyString& s) {
    os << s.c_str();
    return os;
}
