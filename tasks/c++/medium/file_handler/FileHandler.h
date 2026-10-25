// C++ - Medium

#pragma once
#include <string>

class FileHandler {
public:
    static std::string ReadFile(const std::string& path);
    static bool WriteFile(const std::string& path, const std::string& content);
    static bool AppendFile(const std::string& path, const std::string& content);
    static bool FileExists(const std::string& path);
};
