// C++ - Medium

#include "FileHandler.h"
#include <fstream>
#include <sstream>

std::string FileHandler::ReadFile(const std::string& filePath) {
    std::ifstream file(filePath);
    if (!file.is_open()) {
        return "";
    }
    std::ostringstream buffer;
    buffer << file.rdbuf();
    return buffer.str();
}

bool FileHandler::WriteFile(const std::string& filePath, const std::string& content) {
    std::ofstream file(filePath);
    if (!file.is_open()) {
        return false;
    }
    file << content;
    return file.good();
}

bool FileHandler::AppendFile(const std::string& filePath, const std::string& content) {
    std::ofstream file(filePath, std::ios::app);
    if (!file.is_open()) {
        return false;
    }
    file << content;
    return file.good();
}

bool FileHandler::FileExists(const std::string& filePath) {
    std::ifstream file(filePath);
    return file.good();
}
