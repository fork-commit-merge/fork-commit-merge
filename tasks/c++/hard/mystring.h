// C++ - Hard

#pragma once
#include <iostream>

class MyString {
    // TODO: Implement MyString class
    private:
    char* data;  
    int len;

    public:
    //  Constructor
    MyString();

    MyString(const char* s); 

    MyString(const MyString& other);

    // Destructor

    ~MyString();


    // Functions
    int length() const;

    const char* c_str() const;

    void append(const MyString& other);

    int compare(const MyString& other) const;

    MyString& operator=(const MyString& other);

    MyString operator+(const MyString& other) const;

    bool operator==(const MyString& other) const;

    friend std::ostream& operator<<(std::ostream& os, const MyString& str);
};
