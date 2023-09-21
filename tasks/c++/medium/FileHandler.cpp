// This class is responsible for reading and writing to files using the C++ fstream library

#include "FileHandler.h"
#include <fstream>
#include <sstream>

std::string FileHandler::ReadFile(std::string &filePath)
{
    std::ifstream file;
    file.open (filePath, std::ifstream::in);
    if (file.is_open()) {
        std::stringstream buffer;
        buffer << file.rdbuf();
        file.close();
        return buffer.str();
    }
    return "";
};

bool FileHandler::WriteFile(std::string &filePath, std::string content)
{
    std::ofstream file;
    file.open (filePath, std::ofstream::out | std::ofstream::trunc);
    if (file.is_open()) {
        file << content;
        file.close();
        return true;
    }
    return false;
};

bool FileHandler::AppendFile(std::string &filePath, std::string content)
{
    std::ofstream file;
    file.open (filePath, std::ofstream::out | std::ofstream::app);
    if (file.is_open()) {
        file << content;
        file.close();
        return true;
    }
    return false;
};

bool FileHandler::FileExists(std::string &filePath)
{
    std::ifstream file;
    file.open (filePath, std::ifstream::in);
    if (file.is_open()) {
        file.close();
        return true;
    }
    return false;
};
