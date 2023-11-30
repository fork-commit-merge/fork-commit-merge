#pragma once
#include <string>

class FileHandler {
public:
    // Read the content of a given text file and return it as a string.
    static std::string ReadFile(const std::string& filePath);

    // Write a given string to a specified text file.
    static bool WriteFile(const std::string& filePath, const std::string& content);

    // Append a given string to the end of a specified text file.
    static bool AppendFile(const std::string& filePath, const std::string& content);

    // Check if a file exists at a given path.
    static bool FileExists(const std::string& filePath);
};

