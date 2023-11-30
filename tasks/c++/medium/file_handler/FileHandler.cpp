// C++ - Medium

#include "FileHandler.h"
#include <fstream>
#include <sstream>

// TODO: Implement the FileHandler::ReadFile method

// TODO: Implement the FileHandler::WriteFile method

// TODO: Implement the FileHandler::AppendFile method

// TODO: Implement the FileHandler::FileExists method

bool FileHandler::FileExists(const std::string& filePath) {
    std::ifstream fileStream(filePath);
    return fileStream.good();
}
