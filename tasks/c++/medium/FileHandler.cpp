// C++ - Medium

#include "FileHandler.h"
#include <fstream>
#include <sstream>
#include <iostream>
// TODO: Implement the FileHandler::ReadFile method







std::string FileHandler::ReadFile(const std::string& filePath) {
    std::ifstream inputFile(filePath);
    if (!inputFile.is_open()) {
        std::cerr << "Error: Could not open file for reading: " << filePath << std::endl;
        return "";
    }

    std::stringstream fileContent;
    fileContent << inputFile.rdbuf();
    inputFile.close();

    return fileContent.str();
}
// TODO: Implement the FileHandler::WriteFile method
bool FileHandler::WriteFile(const std::string& filePath, const std::string& content) {
    std::ofstream outputFile(filePath);
    if (!outputFile.is_open()) {
        std::cerr << "Error: Could not open file for writing: " << filePath << std::endl;
        return false;
    }

    outputFile << content;
    outputFile.close();
    return true;
}
// TODO: Implement the FileHandler::AppendFile method
bool FileHandler::AppendFile(const std::string& filePath, const std::string& content) {
    std::ofstream outputFile(filePath, std::ios::app);
    if (!outputFile.is_open()) {
        std::cerr << "Error: Could not open file for appending: " << filePath << std::endl;
        return false;
    }

    outputFile << content;
    outputFile.close();
    return true;
}

// TODO: Implement the FileHandler::FileExists method
bool FileHandler::FileExists(const std::string& filePath) {
    std::ifstream file(filePath);
    return file.good();
}
