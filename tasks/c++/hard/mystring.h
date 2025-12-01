// C++ - Hard
// Issue #5595

#ifndef MYSTRING_H
#define MYSTRING_H

#include <iostream>

class MyString {
private:
    char* data;
    int len;

public:
    // Constructors
    MyString();
    MyString(const char* s);
    MyString(const MyString& other);

    // Destructor
    ~MyString();

    // Member functions
    int length() const;
    const char* c_str() const;
    void append(const MyString& other);
    int compare(const MyString& other) const;

    // Bonus: substring
    MyString substring(int start, int end) const;

    // Overloaded operators
    MyString& operator=(const MyString& other);
    MyString operator+(const MyString& other) const;
    bool operator==(const MyString& other) const;

    // Friend function for stream insertion
    friend std::ostream& operator<<(std::ostream& os, const MyString& s);
};

#endif
