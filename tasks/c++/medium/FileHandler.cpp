// // C++ - Medium

// #include "FileHandler.h"
// #include <fstream>
// #include <sstream>

// // TODO: Implement the FileHandler::ReadFile method

// // TODO: Implement the FileHandler::WriteFile method

// // TODO: Implement the FileHandler::AppendFile method

// // TODO: Implement the FileHandler::FileExists method

#include "FileHandler.h"
#include <fstream>
#include <iostream>

std::string FileHandler::ReadFile(const std::string& filename) {
    std::string content;
    std::ifstream file(filename);
    if (file.is_open()) {
        std::string line;
        while (std::getline(file, line)) {
            content += line + "\n";
        }
        file.close();
    } else {
        std::cerr << "Error: Cannot open file for reading - " << filename << std::endl;
    }
    return content;
}

bool FileHandler::WriteFile(const std::string& filename, const std::string& content) {
    std::ofstream file(filename);
    if (file.is_open()) {   
        file << content;
        file.close();
        std::cout << "Write successful." << std::endl;
        return true;
    } else {
        std::cerr << "Error: Cannot open file for writing - " << filename << std::endl;
        return false;
    }
}

bool FileHandler::AppendFile(const std::string& filename, const std::string& content) {
    std::ofstream file(filename, std::ios::app);
    if (file.is_open()) {
        file << content;
        file.close();
        std::cout << "Append successful." << std::endl;
        return true;
    } else {
        std::cerr << "Error: Cannot open file for appending - " << filename << std::endl;
        return false;
    }
}

bool FileHandler::FileExists(const std::string& filename) {
    std::ifstream file(filename);
    return file.good();
}
