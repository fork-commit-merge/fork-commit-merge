// C++ - Hard

#ifndef MYSTRING_H
#define MYSTRING_H
#include <ostream>

class MyString {
public:
	MyString();
	MyString(const char* str);
	MyString(const MyString& other);
	~MyString() noexcept;

	int length() const;
	const char* c_str() const;
	int compare(const MyString& other) const;
	void append(const MyString& other);

	MyString& operator=(const MyString& other);
	MyString operator+(const MyString& other);
	bool operator==(const MyString& other);

	friend std::ostream& operator<<(std::ostream& os, const MyString& s);

protected:

	void clear();

	char* data;
	int len;
};

#endif
