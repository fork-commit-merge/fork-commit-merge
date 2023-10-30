// // C++ - Hard

// #ifndef MYSTRING_H
// #define MYSTRING_H
// #include <iostream>

// class MyString {
//     // TODO: Implement MyString class
// };

// #endif

#ifndef MYSTRING_H
#define MYSTRING_H

#include <iostream>

class MyString {
public:
    // Constructors and Destructor
    MyString();
    MyString(const char* cstr);
    MyString(const MyString& other);
    ~MyString();

    // Member functions
    int length() const;
    const char* c_str() const;
    void append(const MyString& other);
    int compare(const MyString& other) const;

    // Overloaded operators
    MyString& operator=(const MyString& other);
    MyString operator+(const MyString& other) const;
    bool operator==(const MyString& other) const;
    friend std::ostream& operator<<(std::ostream& os, const MyString& str);

    // Bonus feature
    MyString substring(int start, int end) const;

private:
    char* data;
    int size;

    void copyData(const char* cstr);
    void clear();
};

#endif
