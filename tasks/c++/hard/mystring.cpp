#include <iostream>
#include <cstring>

class MyString {
private:
    char* str;

public:
    // Constructors
    MyString() : str(nullptr) {}
    MyString(const char* s) {
        str = new char[strlen(s) + 1];
        strcpy(str, s);
    }

    // Destructor
    ~MyString() {
        if (str != nullptr) {
            delete[] str;
        }
    }

    // Copy constructor
    MyString(const MyString& other) {
        str = new char[strlen(other.str) + 1];
        strcpy(str, other.str);
    }

    // Overloaded assignment operator
    MyString& operator=(const MyString& other) {
        if (this != &other) {
            delete[] str;
            str = new char[strlen(other.str) + 1];
            strcpy(str, other.str);
        }
        return *this;
    }

    // Overloaded concatenation operator
    MyString operator+(const MyString& other) const {
        MyString newString;
        newString.str = new char[strlen(str) + strlen(other.str) + 1];
        strcpy(newString.str, str);
        strcat(newString.str, other.str);
        return newString;
    }

    // Overloaded equality operator
    bool operator==(const MyString& other) const {
        return strcmp(str, other.str) == 0;
    }

    // Function to append a MyString to the current MyString
    void append(const MyString& other) {
        char* temp = new char[strlen(str) + strlen(other.str) + 1];
        strcpy(temp, str);
        strcat(temp, other.str);
        delete[] str;
        str = temp;
    }

    // Friend function to overload the output stream operator
    friend std::ostream& operator<<(std::ostream& os, const MyString& myString) {
        os << myString.str;
        return os;
    }
};

int main() {
    MyString str1("Hello");
    MyString str2(" World");
    MyString str3;

    str3 = str1 + str2;
    std::cout << str3 << std::endl; // Should print: Hello World

    str1.append(str2);
    if (str1 == str3) {
        std::cout << "Both strings are equal!" << std::endl;
    }

    return 0;
}
