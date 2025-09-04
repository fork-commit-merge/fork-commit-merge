// C++ - Hard
#ifndef MYSTRING_H
#define MYSTRING_H
#include <iostream>
#include <memory>

class MyString
{
   private:
    std::unique_ptr<char[]> content;
    size_t len;

   public:
    MyString() = default;

    MyString(const char* s);

    MyString(const MyString& other);

    int length() const;

    const char* c_str() const;

    void append(const MyString& other);

    int compare(const MyString& other) const;

    MyString& operator=(const MyString& other);

    MyString operator+(const MyString& other) const;

    bool operator==(const MyString& other) const;

    friend std::ostream& operator<<(std::ostream& os, const MyString& s);

    MyString substring(int start, int end);
};

#endif