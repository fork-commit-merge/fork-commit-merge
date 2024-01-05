// C++ - Medium

#include "FileHandler.h"
#include <fstream>
#include <sstream>

std::string FileHandler::ReadFile(const std::string &filename) {
    std::ifstream file(filename);
    std::stringstream buffer;
    buffer << file.rdbuf();
    return buffer.str();
}

void FileHandler::WriteFile(const std::string &filename, const std::string &content) {
    std::ofstream file(filename);
    file << content;
}

void FileHandler::AppendFile(const std::string &filename, const std::string &content) {
    std::ofstream file(filename, std::ios_base::app);
    file << content;
}

bool FileHandler::FileExists(const std::string &filename) {
    std::ifstream file(filename);
    return file.good();
}

