// C++ - Medium

#include "FileHandler.h"
#include <fstream>
#include <sstream>

// TODO: Implement the FileHandler::ReadFile method
std::string FileHandler::ReadFile(std::string filepath) {
    std::ifstream file(filepath);
    if (!file.is_open()) return "";

    std::string content = "";
    std::string line;
    while (std::getline(file, line)) {
        content += line + "\n";
    }
    return content;
}

// TODO: Implement the FileHandler::WriteFile method
bool FileHandler::WriteFile(std::string filepath, std::string content) {
    std::ofstream file(filepath);
    if (!file.is_open()) return false;
    file << content;
    return true;
}

// TODO: Implement the FileHandler::AppendFile method
bool FileHandler::AppendFile(std::string filepath, std::string content) {
    std::ofstream file(filepath, std::ios::app);
    if (!file.is_open()) return false;
    file << content;
    return true;
}

// TODO: Implement the FileHandler::FileExists method
bool FileHandler::FileExists(std::string filepath){
    return std::filesystem::exists(filepath);
}

