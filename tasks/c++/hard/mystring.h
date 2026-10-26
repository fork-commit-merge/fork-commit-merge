// C++ - Hard

#ifndef MYSTRING_H
#define MYSTRING_H

#include <iostream>

class MyString {
private:
    char* data;   // dynamically allocated, always null-terminated
    int len;      // number of characters (without '\0')

public:
    // Constructors
    MyString();                          // default: empty string
    MyString(const char* s);             // from C-style string
    MyString(const MyString& other);     // copy constructor

    // Destructor
    ~MyString();

    // Member functions
    int length() const;
    const char* c_str() const;
    void append(const MyString& other);
    int compare(const MyString& other) const;

    // Bonus: characters from index start up to and including end
    MyString substring(int start, int end) const;

    // Operators
    MyString& operator=(const MyString& other);
    MyString operator+(const MyString& other) const;
    bool operator==(const MyString& other) const;

    friend std::ostream& operator<<(std::ostream& os, const MyString& s);
};

std::ostream& operator<<(std::ostream& os, const MyString& s);

#endif