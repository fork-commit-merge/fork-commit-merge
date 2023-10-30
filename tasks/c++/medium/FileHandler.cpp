#include "FileHandler.h"
#include <fstream>
#include <sstream>

FileHandler::FileHandler(const std::string& filePath) : filePath(filePath) {}

std::string FileHandler::ReadFile() {
    std::ifstream file(filePath);
    if (file.is_open()) {
        std::stringstream buffer;
        buffer << file.rdbuf();
        file.close();
        return buffer.str();
    } else {
        return "Error: File not found or could not be opened.";
    }
}

bool FileHandler::WriteFile(const std::string& content) {
    std::ofstream file(filePath);
    if (file.is_open()) {
        file << content;
        file.close();
        return true;
    } else {
        return false;
    }
}

bool FileHandler::AppendFile(const std::string& content) {
    std::ofstream file(filePath, std::ios::app);
    if (file.is_open()) {
        file << content;
        file.close();
        return true;
    } else {
        return false;
    }
}

bool FileHandler::FileExists() {
    std::ifstream file(filePath);
    return file.good();
}
