#ifndef MYSTRING_H
#define MYSTRING_H

#include <iostream>

class MyString {
private:
    char* data; // Pointer to dynamic array for string storage

public:
    MyString(); // Default constructor
    MyString(const char* str); // Parameterized constructor
    MyString(const MyString& other); // Copy constructor
    ~MyString(); // Destructor

    int length() const; // Return the length of the string
    const char* c_str() const; // Return the C-style string

    MyString& append(const MyString& other); // Append another MyString
    int compare(const MyString& other) const; // Compare with another MyString

    // Overloaded operators
    MyString& operator=(const MyString& other); // Assignment operator
    MyString operator+(const MyString& other) const; // Addition operator
    bool operator==(const MyString& other) const; // Equality operator

    // Stream insertion operator declared as a friend
    friend std::ostream& operator<<(std::ostream& os, const MyString& obj);

    MyString substring(int start, int end) const; // Bonus: Substring function
};

#endif // MYSTRING_H
