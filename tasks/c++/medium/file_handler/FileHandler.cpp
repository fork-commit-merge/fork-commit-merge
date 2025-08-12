// C++ - Medium

#include "FileHandler.h"
#include <fstream>
#include <sstream>
#include <iostream>
#include <cstdio>

std::string FileHandler::ReadFile(const std::string& filePath) {
    std::ifstream file(filePath); // Open file for reading

    if (!file.is_open()) { 
        std::cerr << "Error: Unable to open file for reading: " << filePath << std::endl;
        return "";
    }

    std::stringstream buffer;
    buffer << file.rdbuf(); 
    file.close(); 

    return buffer.str(); 
}


bool FileHandler::WriteFile(const std::string& filePath, const std::string& content) {
    std::ofstream file(filePath); // Open file for writing, overwrites existing content

    if (!file.is_open()) { 
        std::cerr << "Error: Unable to open file for writing: " << filePath << std::endl;
        return false;
    }

    file << content; 
    file.close(); 
    return true;
}


bool FileHandler::AppendFile(const std::string& filePath, const std::string& content) {
    std::ofstream file(filePath, std::ios::app); // Open file in append mode

    if (!file.is_open()) { 
        std::cerr << "Error: Unable to open file for appending: " << filePath << std::endl;
        return false;
    }

    file << content; 
    file.close(); 

    return true;
}


bool FileHandler::FileExists(const std::string& filePath) {
    std::ifstream file(filePath); // Attempt to open the file for reading
    return file.good(); 
}

