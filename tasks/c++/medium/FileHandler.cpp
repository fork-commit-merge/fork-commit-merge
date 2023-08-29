// C++ - Medium
#include "FileHandler.h"
#include <fstream>
#include <sstream

std::string FileHandler::ReadFile(const std::string& filePath) {
    std::ifstream file(filePath);
    if (!file.is_open()) {
        return ""; 
    }

    std::string content((std::istreambuf_iterator<char>(file)), std::istreambuf_iterator<char>());
    file.close();
    return content;
}

bool FileHandler::WriteFile(const std::string& filePath, const std::string& content) {
    std::ofstream file(filePath);
    if (!file.is_open()) {
        return false; 
    }

    file << content;
    file.close();
    return true;
}

bool FileHandler::AppendFile(const std::string& filePath, const std::string& content) {
    std::ofstream file(filePath, std::ios_base::app);
    if (!file.is_open()) {
        return false;
    }

    file << content;
    file.close();
    return true;
}

bool FileHandler::FileExists(const std::string& filePath) {
    std::ifstream file(filePath);
    return file.good();
}

