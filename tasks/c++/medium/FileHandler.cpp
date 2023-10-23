// C++ - Medium

#include "FileHandler.h"
#include <fstream>
#include <sstream>

int main() {
    std::string filePath = "text-file.txt";

    // Test Write
    if (FileHandler::WriteFile(filePath, "Hello, World!")) {
        std::cout << "Write successful.\n";
    } else {
        std::cout << "Write failed.\n";
    }

    // Test Append
    if (FileHandler::AppendFile(filePath, "\nAppended text.")) {
        std::cout << "Append successful.\n";
    } else {
        std::cout << "Append failed.\n";
    }

    // Test Read
    std::string content = FileHandler::ReadFile(filePath);
    std::cout << "File content:\n" << content << '\n';

    // Test File Exists
    if (FileHandler::FileExists(filePath)) {
        std::cout << "File exists.\n";
    } else {
        std::cout << "File does not exist.\n";
    }

    return 0;
}
