#ifndef MYSTRING_H
#define MYSTRING_H

#include <cstring>
#include <iostream>

class MyString {
private:
    char* data;
    int len;

public:
    // Constructors & Destructor
    MyString(const char* s = nullptr);
    MyString(const MyString& other);
    ~MyString();

    // Member Functions
    int length() const;
    const char* c_str() const;
    void append(const MyString& other);
    int compare(const MyString& other) const;

    // Overloaded Operators
    MyString& operator=(const MyString& other);
    MyString operator+(const MyString& other) const;
    bool operator==(const MyString& other) const;

    // Stream Output Operator
    friend std::ostream& operator<<(std::ostream& os, const MyString& s);
};

#endif // MYSTRING_H

// ==========================================
// Class Member Implementations
// ==========================================

// Constructor
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

// Copy Constructor (Deep Copy)
MyString::MyString(const MyString& other) {
    len = other.len;
    data = new char[len + 1];
    std::strcpy(data, other.data);
}

// Destructor
MyString::~MyString() {
    delete[] data;
}

// Returns the length of the string
int MyString::length() const {
    return len;
}

// Returns C-style string pointer
const char* MyString::c_str() const {
    return data;
}

// Appends another MyString
void MyString::append(const MyString& other) {
    int new_len = len + other.len;
    char* new_data = new char[new_len + 1];

    std::strcpy(new_data, data);
    std::strcat(new_data, other.data);

    delete[] data;
    data = new_data;
    len = new_len;
}

// Lexicographical comparison
int MyString::compare(const MyString& other) const {
    return std::strcmp(data, other.data);
}

// Assignment Operator (=)
MyString& MyString::operator=(const MyString& other) {
    if (this != &other) {
        delete[] data;
        len = other.len;
        data = new char[len + 1];
        std::strcpy(data, other.data);
    }
    return *this;
}

// Concatenation Operator (+)
MyString MyString::operator+(const MyString& other) const {
    MyString temp(*this);
    temp.append(other);
    return temp;
}

// Equality Operator (==)
bool MyString::operator==(const MyString& other) const {
    return std::strcmp(data, other.data) == 0;
}

// Stream Insertion Operator (<<)
std::ostream& operator<<(std::ostream& os, const MyString& s) {
    os << s.c_str();
    return os;
}

// ==========================================
// Main Function
// ==========================================

int main() {
    // 1. Initializing string
    MyString str1("Hello, World!");
    
    // 2. Appending text
    str1.append("\nAppended text.");

    // 3. Output
    std::cout << str1 << std::endl;

    return 0;
}
