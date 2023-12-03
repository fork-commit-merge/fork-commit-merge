#include "mystring.h"
#include <cstring>

MyString::MyString() {
	this->clear();
}

MyString::MyString(const char* str) {
	if (!str) {
		this->clear();
		return;
	}

	int len = (int)strlen(str);
	char* data = new char[len + 1];
	if (data) {
		this->len = len;
		strcpy(data, str);
		this->data = data;
	} else {
		this->clear();
	}
}

MyString::MyString(const MyString& other) {
	int len = other.len;
	char* data = new char[len + 1];
	if (data) {
		this->len = len;
		strcpy(data, other.data);
		this->data = data;
	} else {
		this->clear();
	}
}

MyString::~MyString() noexcept {
	if (data != nullptr) {
		delete[] data;
	}
}

int MyString::length() const {
	return len;
}

const char* MyString::c_str() const {
	return data;
}

int MyString::compare(const MyString& other) const {
	if (!this->data && !other.data) {
		return 0;
	} else if (this->data && !other.data) {
		return 1;
	} else if (!this->data && other.data) {
		return -1;
	}

	return strcmp(this->data, other.data);
}

MyString& MyString::operator=(const MyString& other) {
	if (this != &other) {
		if (other.len <= 0 || !other.data) {
			this->clear();
			return *this;
		}

		char* data = new char[other.len + 1];
		if (data) {
			this->len = other.len;
			strcpy(data, other.data);
			this->data = data;
		} else {
			this->clear();
		}
	}

	return *this;
}

void MyString::append(const MyString& other) {
	int len = this->len + other.len;
	char* buffer = new char[len + 1];
	if (!buffer) {
		return;
	}

	if (this->len) {
		memcpy(buffer, this->data, this->len);
	}
	if (other.len) {
		memcpy(buffer + this->len, other.data, other.len);
	}
	buffer[len] = 0;

	delete[] this->data;
	this->data = buffer;
	this->len = len;
}

MyString MyString::operator+(const MyString& other) {
	int len = this->len + other.len;
	char* buffer = new char[len + 1];
	if (!buffer) {
		return MyString();
	}

	if (this->len) {
		memcpy(buffer, this->data, this->len);
	}
	if (other.len) {
		memcpy(buffer + this->len, other.data, other.len);
	}
	buffer[len] = 0;
	MyString result(buffer);
	delete[] buffer;

	return result;
}

bool MyString::operator==(const MyString& other) {
	return this->compare(other) == 0;
}

void MyString::clear() {
	this->len = 0;
	this->data = new char[1];
	if (this->data) {
		this->data[0] = 0;
	}
}

std::ostream& operator<<(std::ostream& os, const MyString& s) {
	if (s.data) {
		os << s.data;
	}
	return os;
}
