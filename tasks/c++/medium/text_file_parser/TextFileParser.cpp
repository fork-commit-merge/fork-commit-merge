#include <cstring>
#include <iostream>

class MyString {
private:
    char* data;
    int len;

public:
    // Constructors & Destructor
    MyString(const char* s = nullptr);
    MyString(const MyString& other);
    ~MyString();

    // Member Functions
    int length() const;
    const char* c_str() const;
    void append(const MyString& other);
    int compare(const MyString& other) const;

    // Overloaded Operators
    MyString& operator=(const MyString& other);
    MyString operator+(const MyString& other) const;
    bool operator==(const MyString& other) const;

    // Stream Insertion Operator
    friend std::ostream& operator<<(std::ostream& os, const MyString& s);
};

// ==========================================
// Implementation of Class Member Functions
// ==========================================

// Constructor
MyString::MyString(const char* s) {
    if (s == nullptr) {
        len = 0;
        data = new char[1];
        data[0] = '\0';
    } else {
        len = std::strlen(s);
        data = new char[len + 1];
        std::strcpy(data, s);
    }
}

// Copy Constructor (Deep Copy)
MyString::MyString(const MyString& other) {
    len = other.len;
    data = new char[len + 1];
    std::strcpy(data, other.data);
}

// Destructor
MyString::~MyString() {
    delete[] data;
}

// Returns the length of the string
int MyString::length() const {
    return len;
}

// Returns the underlying C-style string
const char* MyString::c_str() const {
    return data;
}

// Appends another MyString to the current object
void MyString::append(const MyString& other) {
    int new_len = len + other.len;
    char* new_data = new char[new_len + 1];

    std::strcpy(new_data, data);
    std::strcat(new_data, other.data);

    delete[] data;
    data = new_data;
    len = new_len;
}

// Compares two strings lexicographically
int MyString::compare(const MyString& other) const {
    return std::strcmp(data, other.data);
}

// Copy Assignment Operator
MyString& MyString::operator=(const MyString& other) {
    if (this != &other) { // Guard against self-assignment
        delete[] data;

        len = other.len;
        data = new char[len + 1];
        std::strcpy(data, other.data);
    }
    return *this;
}

// Concatenation Operator (+)
MyString MyString::operator+(const MyString& other) const {
    MyString temp(*this);
    temp.append(other);
    return temp;
}

// Equality Operator (==)
bool MyString::operator==(const MyString& other) const {
    return std::strcmp(data, other.data) == 0;
}

// Stream Output Operator (<<)
std::ostream& operator<<(std::ostream& os, const MyString& s) {
    os << s.c_str();
    return os;
}

// ==========================================
// Main Function
// ==========================================

int main() {
    MyString str1("Hello, World!");
    MyString str2("\nAppended text.");

    // Append str2 to str1
    str1.append(str2);

    // Display result
    std::cout << str1 << std::endl;

    return 0;
}
