#include <cstring>
#include <iostream>
#include "mystring.h"

MyString::MyString(const char* s) {
    // TODO: Implement this
    n = strlen(s);
    characters = new char[n + 1];
    strcpy(characters, s);
}

MyString::MyString(const MyString& other) {
    // TODO: Implement this
    n=other.n;
    characters = new char[n+1];
    strcpy(characters, other.characters);

}

int MyString::length() const {
    // TODO: Implement this
    return n;
}

const char* MyString::c_str() const {
    // TODO: Implement this
    return characters;
}

void MyString::append(const MyString& other) {
    int newLen = n + other.n;
    char* tmp = new char[newLen + 1];

    // start with an empty string so strcat has a proper starting '\0'
    tmp[0] = '\0';

    if (characters)       std::strcpy(tmp, characters);       // copy first
    if (other.characters) std::strcat(tmp, other.characters); // append second

    delete[] characters;
    characters = tmp;
    n = newLen;
}

int MyString::compare(const MyString& other) const {
    // TODO: Implement this
    return strcmp(characters, other.characters);
}

MyString& MyString::operator=(const MyString& other) {
    // TODO: Implement this
    if (this==&other) {
        return *this;
    }
    delete [] characters;
    n=other.n;
    characters=new char[strlen(other.characters)+1];
    strcpy(characters, other.characters);

    return *this;
}

MyString MyString::operator+(const MyString& other) const {
    // TODO: Implement this
    MyString result;
    result.n= n+other.n;
    result.characters=new char [result.n+1];
    strcpy(result.characters, characters);
    strcat(result.characters, other.characters);

    return result;
}

bool MyString::operator==(const MyString& other) const {
    // TODO: Implement this
    return strcmp(characters, other.characters) == 0;
}

std::ostream& operator<<(std::ostream& os, const MyString& s) {
    // TODO: Implement this
    os<<s.characters;

    return os;
}

MyString::~MyString() {
    delete [] characters;
}
