// C++ - Medium

#pragma once
#include <string>

class FileHandler {
public:
    /**
     * @brief Reads a text file that exists on the filesystem.
     * 
     * @param filePath The path to the file to read.
     * @return The contents of the file read as a `std::string`.
     */
    static std::string ReadFile(const std::string& filePath);

    /**
     * @brief Writes a string to a text file that exists on the filesystem.
     * 
     * @param filePath The path to the file to write to.
     * @param toWrite The string to write to the file.
     * @return Whether or not the operation was successful as a `bool`.
     */
    static bool WriteFile(const std::string& filePath, const char* toWrite);

    /**
     * @brief Appends a string to a text file that exists on the filesystem.
     * 
     * @param filePath The path to the file to append a string to.
     * @param toAppend The string to append to the file.
     * @return Whether or not the operation was successful as a `bool`.
     */
    static bool AppendFile(const std::string& filePath, const char* toAppend);

    /**
     * @brief Checks whether or not a file exists.
     * 
     * @param filePath The path to a supposed file to check.
     * @return Whether or not a file exists as a `bool`.
     */
    static bool FileExists(const std::string& filePath);
};
