// This class is responsible for reading and writing to files using the C++ fstream library

#pragma once

#include <string>

class FileHandler {
public:

    /**
     * @brief Reads the content of a given text file and returns it as a string.
     * 
     * @param filePath The path to the file to write to.
     * @return A string with the content of the file.
     */
    static std::string ReadFile(std::string &filePath);

    /**
     * @brief Writes a given string to a specified text file.
     * 
     * @param filePath The path to the file to write to.
     * @param content The content to write to the file.
     * @return A boolean indicating if the operation was succesful.
     */
    static bool WriteFile(std::string &filePath, std::string content);

    /**
     * @brief Appends a given string to the end of a specified text file.
     * 
     * @param filePath The path to the file to write to.
     * @param content The content to write to the file.
     * @return A boolean indicating if the operation was succesful.
     */
    static bool AppendFile(std::string &filePath, std::string content);

    /**
     * @brief Checks if a file exists at a given path.
     * 
     * @param filePath The path to the file to write to.
     * @return A boolean indicating if the file exists.
     */
    static bool FileExists(std::string &filePath);
};
