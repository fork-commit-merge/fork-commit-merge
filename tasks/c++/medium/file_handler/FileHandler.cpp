#include "FileHandler.h"
#include <fstream>
#include <sstream>
#include <iostream>
#include <filesystem>

std::string FileHandler::ReadFile(const std::string& filePath) {
    std::ifstream file(filePath);
    std::stringstream buffer;

    if (!file.is_open()) {
        std::cerr << "Error: Could not open file for reading: " << filePath << std::endl;
        return "";
    }

    buffer << file.rdbuf();
    return buffer.str();
}

bool FileHandler::WriteFile(const std::string& filePath, const std::string& content) {
    std::ofstream file(filePath);

    if (!file.is_open()) {
        std::cerr << "Error: Could not open file for writing: " << filePath << std::endl;
        return false;
    }

    file << content;
    return true;
}

bool FileHandler::AppendFile(const std::string& filePath, const std::string& content) {
    std::ofstream file(filePath, std::ios::app);

    if (!file.is_open()) {
        std::cerr << "Error: Could not open file for appending: " << filePath << std::endl;
        return false;
    }

    file << content;
    return true;
}

bool FileHandler::FileExists(const std::string& filePath) {
    return std::filesystem::exists(filePath);
}
