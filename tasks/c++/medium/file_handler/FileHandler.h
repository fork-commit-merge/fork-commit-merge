// C++ - Medium

#include "FileHandler.h"
#include <fstream>
#include <sstream>

std::string FileHandler::ReadFile(const std::string& path) {
    std::ifstream file(path);
    if (!file.is_open()) {
        return "";
    }
    std::stringstream buffer;
    buffer << file.rdbuf();
    return buffer.str();
}

bool FileHandler::WriteFile(const std::string& path, const std::string& content) {
    std::ofstream file(path, std::ios::out | std::ios::trunc);
    if (!file.is_open()) {
        return false;
    }
    file << content;
    return file.good();
}

bool FileHandler::AppendFile(const std::string& path, const std::string& content) {
    std::ofstream file(path, std::ios::out | std::ios::app);
    if (!file.is_open()) {
        return false;
    }
    file << content;
    return file.good();
}

bool FileHandler::FileExists(const std::string& path) {
    std::ifstream file(path);
    return file.good();
}
