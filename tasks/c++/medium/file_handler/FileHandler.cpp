#include "FileHandler.h"
#include <fstream>
#include <sstream>

std::string FileHandler::ReadFile(const std::string& filename) {
    std::ifstream file(filename);
    if (!file.is_open()) {
        return "";
    }
    std::stringstream buffer;
    buffer << file.rdbuf(); 
    return buffer.str();
}
bool FileHandler::WriteFile(const std::string& filename, const std::string& content) {
    std::ofstream file(filename, std::ios::out | std::ios::trunc);
    if (!file.is_open()) {
        return false;
    }
    file << content;
    return file.good();
}

bool FileHandler::AppendFile(const std::string& filename, const std::string& content) {
    std::ofstream file(filename, std::ios::out | std::ios::app);
    if (!file.is_open()) {
        return false;
    }
    file << content;
    return file.good();
}

bool FileHandler::FileExists(const std::string& filename) {
    std::ifstream file(filename);
    return file.good();
}
