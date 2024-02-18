
class MyString {
private:
    char* str; // Pointer to the string data
    size_t len; // Length of the string

public:
    // Default constructor
    MyString() : str(nullptr), len(0) {}

    // Parameterized constructor
    MyString(const char* s);

    // Copy constructor
    MyString(const MyString& other);

    // Move constructor
    MyString(MyString&& other) noexcept;

    // Destructor
    ~MyString();

    // Copy assignment operator
    MyString& operator=(const MyString& other);

    // Move assignment operator
    MyString& operator=(MyString&& other) noexcept;

    // Concatenation operator
    MyString operator+(const MyString& other) const;

    // Equality operator
    bool operator==(const MyString& other) const;

    // Inequality operator
    bool operator!=(const MyString& other) const;

    // Less than operator
    bool operator<(const MyString& other) const;

    // Greater than operator
    bool operator>(const MyString& other) const;

    // Function to append to the current string
    void append(const MyString& other);

    // Function to compare two strings
    int compare(const MyString& other) const;

    // Function to return C-style string
    const char* c_str() const;

    // Function to get the length of the string
    size_t length() const;

    // Friend function to output the string using ostream
    friend std::ostream& operator<<(std::ostream& os, const MyString& s);
};
