// C++ - Medium

#pragma once
#include <string>

class FileHandler {
public:
    // Reads the content of a given text file and returns it as a string
    static std::string ReadFile(const std::string& filePath);

    // Writes a given string to a specified text file
    static bool WriteFile(const std::string& filePath, const std::string& content);

    // Appends a given string to the end of a specified text file
    static bool AppendFile(const std::string& filePath, const std::string& content);

    // Checks if a file exists at a given path
    static bool FileExists(const std::string& filePath);
};
