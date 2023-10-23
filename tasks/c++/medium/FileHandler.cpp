// C++ - Medium

#include "FileHandler.h"
#include <fstream>
#include <iostream>
#include <sstream>

// Implemented the FileHandler::ReadFile method
std::string FileHandler::ReadFile(const std::string &filePath)
{
    std::string content;
    std::ifstream file(filePath);

    if (file)
    {
        // Read the content of the file into a string
        content.assign((std::istreambuf_iterator<char>(file)), std::istreambuf_iterator<char>());
        file.close();
    }
    else
    {
        std::cerr << "Error: Unable to read the file '" << filePath << "'.\n";
    }

    return content;
}

// Implemented the FileHandler::WriteFile method
bool FileHandler::WriteFile(const std::string &filePath, const std::string &content)
{
    std::ofstream file(filePath, std::ios::out);

    if (file)
    {
        file << content;
        file.close();
        return true;
    }
    else
    {
        std::cerr << "Error: Unable to write to the file '" << filePath << "'.\n";
        return false;
    }
}

// Implemented the FileHandler::AppendFile method
bool FileHandler::AppendFile(const std::string &filePath, const std::string &content)
{
    std::ofstream file(filePath, std::ios::out | std::ios::app);

    if (file)
    {
        file << content;
        file.close();
        return true;
    }
    else
    {
        std::cerr << "Error: Unable to append to the file '" << filePath << "'.\n";
        return false;
    }
}

// Implemented the FileHandler::FileExists method
bool FileHandler::FileExists(const std::string &filePath)
{
    std::ifstream file(filePath);
    return file.good();
}
