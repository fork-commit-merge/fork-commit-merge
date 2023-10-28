// C++ - Hard

#include "mystring.h"
#include <cstring>
#include <iostream>

// Default constructor
MyString::MyString() : cstr(nullptr), len(0), size(0) {}

// Parameterized constructor
MyString::MyString(const char* s) {
	len = 0;
	while(s[len]) ++len;
	size = len+1;
	cstr = new char[size];
	for(unsigned int i=0; i<size; ++i) cstr[i] = s[i];
}

// Copy constructor
MyString::MyString(const MyString& other) {
    len = other.len; size = len+1;
	cstr = new char[size];
	for(unsigned int i=0; i<size; ++i) cstr[i] = other.cstr[i];
}

// Destructor
MyString::~MyString() {
    delete[] cstr;
}

unsigned int MyString::length() const {
    return len;
}

const char* MyString::c_str() const {
    return cstr;
}

void MyString::append(const MyString& other) {
	if(size < len+other.len+1) {
		size = 1; while(size<len+other.len) size <<= 1;
		char* temp = new char[++size];
		for(unsigned int i=0; i<len; ++i) temp[i] = cstr[i];
		delete[] cstr;
		cstr = temp;
	}
	for(unsigned int i=0; i<other.len+1; ++i) cstr[i+len] = other.cstr[i];
	len += other.len;
}

int MyString::compare(const MyString& other) const {
    int res = 0;
	for(unsigned int i=0; i<len+1; ++i) {
		if(cstr[i] < other.cstr[i]) { res = -1; break; }
		else if(cstr[i] > other.cstr[i]) { res = 1; break; }
	}
	return res;
}

void MyString::operator=(const MyString& other) {
    len = other.len; size = len+1;
	delete[] cstr;
	cstr = new char[size];
	for(unsigned int i=0; i<size; ++i) cstr[i] = other.cstr[i];
}

MyString MyString::operator+(const MyString& other) const {
    MyString res;
	res.len = len + other.len;
	res.size = res.len + 1;
	res.cstr = new char[res.size];
	for(unsigned int i=0; i<len; ++i) res.cstr[i] = cstr[i];
	for(unsigned int i=0; i<other.len+1; ++i) res.cstr[len+i] = other.cstr[i];
	return res;
}

bool MyString::operator==(const MyString& other) const {
	if(len != other.len) return 0;
    for(unsigned int i=0; i<len; ++i) if(cstr[i] != other.cstr[i]) return 0;
	return 1;
}

std::ostream& operator<<(std::ostream& os, const MyString& s) {
    os << s.c_str();
	return os;
}
