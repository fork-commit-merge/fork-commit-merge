#include "FileHandler.h"
#include <fstream>
#include <sstream>
#include <iostream>

std::string FileHandler::ReadFile(const std::string& filePath) {
    std::ifstream fileStream(filePath);
    std::string fileContent;

    if (fileStream.is_open()) {
        std::stringstream buffer;
        buffer << fileStream.rdbuf();
        fileContent = buffer.str();
        fileStream.close();
    } else {
        std::cerr << "Error: Unable to open file for reading: " << filePath << std::endl;
    }

    return fileContent;
}

bool FileHandler::WriteFile(const std::string& filePath, const std::string& content) {
    std::ofstream fileStream(filePath);

    if (fileStream.is_open()) {
        fileStream << content;
        fileStream.close();
        return true;
    } else {
        std::cerr << "Error: Unable to open file for writing: " << filePath << std::endl;
        return false;
    }
}

bool FileHandler::AppendFile(const std::string& filePath, const std::string& content) {
    std::ofstream fileStream(filePath, std::ios::app);

    if (fileStream.is_open()) {
        fileStream << content;
        fileStream.close();
        return true;
    } else {
        std::cerr << "Error: Unable to open file for appending: " << filePath << std::endl;
        return false;
    }
}

bool FileHandler::FileExists(const std::string& filePath) {
    std::ifstream fileStream(filePath);
    return fileStream.good();
