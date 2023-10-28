// C++ - Hard

#ifndef MYSTRING_H
#define MYSTRING_H
#include <iostream>

class MyString {
public:
	MyString();
	~MyString();
	MyString(const char* data);
	MyString(const MyString& str);
	
	unsigned int length() const;
	const char* c_str() const;
	void append(const MyString& str);
	int compare(const MyString& str) const;
	
	void	 operator=	(const MyString& other);
	MyString operator+  (const MyString& str) const;
	bool 	 operator== (const MyString& str) const;
	
private:
	char* cstr;
	unsigned int len, size;
};

std::ostream& operator<<(std::ostream& os, const MyString& s);

#endif

