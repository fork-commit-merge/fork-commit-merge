// C++ - Hard

#ifndef MYSTRING_H
#define MYSTRING_H
#include <iostream>

class MyString {
    char* _data = 0;
    int _data_length = 0;
    int _length = 0;

    void __add_data_length(int len);

public:

    MyString(const char* s) ;
    MyString(const MyString& other) ;
    MyString() ;


    ~MyString() ;

    int length() const ;

    const char* c_str() const ;

    void append(const MyString& other) ;
    int compare(const MyString& other) const ;

    MyString& operator=(const MyString& other) ;
    MyString operator+(const MyString& other) const ;
    bool operator==(const MyString& other) const ;

    char& operator[](int i) const ;
    char& operator[](int i) ;


};
std::ostream& operator<<(std::ostream& os, const MyString& s) ;
#endif
