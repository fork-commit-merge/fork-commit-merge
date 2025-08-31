// C++ - Hard

#ifndef MYSTRING__H__
#define MYSTRING__H__ 

#include <iostream>
#include <cstring>
#include <stdbool.h>

class MyString 
{
	private:
		char* _data; 

	public: 
		MyString(const char* cstr = ""); 
		MyString(const MyString& other); 
		
		inline const char* c_str() const; 
		inline size_t length() const; // size_t is better
		int compare(const MyString& other) const; 
	
		void append(const MyString& other); 

		MyString& operator=(const MyString& other); // returned MyString&
		MyString operator+(const MyString& other) const;
		bool operator==(const MyString& other) const;
		friend std::ostream& operator<<(std::ostream& os, const MyString& str);

		~MyString() 
		{
			delete[] _data;
		}
}; // Didn't have ; to end class def

#endif
