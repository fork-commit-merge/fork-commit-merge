// C++ - Medium

#pragma once
#include <string>

class FileHandler {
public:
    static std::string ReadFile(std::string filepath);
    static bool WriteFile(std::string filepath, std::string content);
    static bool AppendFile(std::string filepath, std::string content);
    static bool FileExists(std::string filepath);
};
