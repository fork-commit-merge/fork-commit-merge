// C++ - Medium

#pragma once
#include <string>

class FileHandler {
public:
    static std::string ReadFile(const std::string& filename);
    static bool WriteFile(const std::string& filename, const std::string& content);
    static bool AppendFile(const std::string& filename, const std::string& content);
    static bool FileExists(const std::string& filename);
    };
