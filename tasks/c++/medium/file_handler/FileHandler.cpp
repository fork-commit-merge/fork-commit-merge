// C++ - Medium

#include "FileHandler.h"
#include <fstream>
#include <sstream>
#include <stdexcept>

// Reads the content of a given text file and returns it as a string
std::string FileHandler::ReadFile(const std::string& filePath) {
    std::ifstream file(filePath);
    if (!file) {
        throw std::runtime_error("Unable to open file for reading: " + filePath);
    }
    std::stringstream buffer;
    buffer << file.rdbuf();
    return buffer.str();
}

// Writes a given string to a specified text file
bool FileHandler::WriteFile(const std::string& filePath, const std::string& content) {
    std::ofstream file(filePath);
    if (!file) {
        return false;
    }
    file << content;
    return true;
}



// Appends a given string to the end of a specified text file
bool FileHandler::AppendFile(const std::string& filePath, const std::string& content) {
    std::ofstream file(filePath, std::ios::app);
    if (!file) {
        return false;
    }
    file << content;
    return true;
}

// Checks if a file exists at a given path
bool FileHandler::FileExists(const std::string& filePath) {
    std::ifstream file(filePath);
    return file.good();
}
