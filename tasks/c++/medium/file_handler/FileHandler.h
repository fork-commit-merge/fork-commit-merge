#pragma once
#include <string>
#include <fstream>

class FileHandler {
public:
    FileHandler(const std::string& filePath) : filePath(filePath) {}

    bool openFile() {
        fileStream.open(filePath);
        return fileStream.is_open();
    }

    void closeFile() {
        fileStream.close();
    }

    bool writeToFile(const std::string& content) {
        if (!fileStream.is_open()) {
            return false;
        }

        fileStream << content;
        return true;
    }

    std::string readFromFile() {
        std::string content;
        std::string line;

        if (!fileStream.is_open()) {
            return content;
        }

        while (std::getline(fileStream, line)) {
            content += line + "\n";
        }

        return content;
    }

private:
    std::string filePath;
    std::fstream fileStream;
};
