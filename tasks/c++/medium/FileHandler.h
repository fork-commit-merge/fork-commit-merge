#pragma once
#include <string>

class FileHandler {
public:
    FileHandler(const std::string& filePath);

    std::string ReadFile();
    bool WriteFile(const std::string& content);
    bool AppendFile(const std::string& content);
    bool FileExists();

private:
    std::string filePath;
};
