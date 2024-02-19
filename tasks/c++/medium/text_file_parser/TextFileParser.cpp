#include <iostream>
#include <fstream>
#include <string>

class TextFileParser {
public:
    static std::string ReadFile(const std::string& filePath) {
        std::ifstream file(filePath);
        std::string content((std::istreambuf_iterator<char>(file)), std::istreambuf_iterator<char>());
        return content;
    }

    // Additional parsing functions can be added here
};

int main() {
    std::string filePath = "input.txt";
    std::string fileContent = TextFileParser::ReadFile(filePath);
    std::cout << "File content:\n" << fileContent << std::endl;
    return 0;
}
