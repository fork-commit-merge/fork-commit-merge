// C++ - Medium

#pragma once
#include <string>
#include <fstream>

class FileHandler {
public:
    std::string ReadFile(const std::string &filename);
    void WriteFile(const std::string &filename, const std::string &content);
    void AppendFile(const std::string &filename, const std::string &content);
    bool FileExists(const std::string &filename);
};
