#include "mystring.h"

MyString::MyString(const char* cstr) 
{
	size_t len = strlen(cstr);

	_data = new char[len + 1];
	memcpy(_data, cstr, len);
	_data[len] = '\0';
}

MyString::MyString(const MyString& other) 
{
	size_t len = other.length();
	_data = new char[len + 1]; 

	memcpy(_data, other.c_str(), len); 
	_data[len] = '\0';
}

size_t MyString::length() const 
{
	return strlen(_data); 
}

inline const char* MyString::c_str() const 
{
    return _data; 
}

void MyString::append(const MyString& other) 
{
    size_t this_len, other_len; 

	this_len = strlen(_data); 
	other_len = other.length();

	char* new_data = new char[this_len + other_len + 1]; 

	memcpy(new_data, _data, this_len);
	memcpy(new_data + this_len, other.c_str(), other_len);

	new_data[this_len + other_len] = '\0';

	delete[] _data; 
	_data = new_data; 
}

int MyString::compare(const MyString& other) const 
{
	size_t len = strlen(_data); 
	if (len != other.length()) return false;

	const char* buf = other.c_str(); 

	for (int i = 0; i < len; i++)
		if (_data[i] != buf[i]) return false;
 
	return true; 
}

MyString& MyString::operator=(const MyString& other) 
{
	if (this == &other) return *this; 

	size_t new_len = other.length(); 
	char* new_data = new char[new_len + 1]; 

	memcpy(new_data, other.c_str(), new_len);
	new_data[new_len] = '\0';

	delete[] _data; 
	_data = new_data;

	return *this; 
}

MyString MyString::operator+(const MyString& other) const 
{
	size_t this_len = strlen(_data);
	size_t other_len = other.length(); 
	char* new_data = new char[this_len + other_len + 1]; 

	memcpy(new_data, _data, this_len); 
	memcpy(new_data + this_len, other.c_str(), other_len);

	new_data[this_len + other_len] = '\0';

	return MyString(new_data);
}

bool MyString::operator==(const MyString& other) const 
{
	size_t this_len = strlen(_data);

	if (this == &other) return true; 
	if (this_len != other.length()) return false; 

	const char* buf = other.c_str(); 

	for (int i = 0; i < this_len; i++)
		if (_data[i] != buf[i]) return false;

	return true; 
}

std::ostream& operator<<(std::ostream& os, const MyString& str) // Operator << must be binary
{
	os << str._data; 
	return os;
}
