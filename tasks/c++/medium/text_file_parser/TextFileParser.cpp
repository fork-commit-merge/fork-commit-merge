#include <iostream>

#include <iostream>
#include <fstream>
#include <string>

void ReadFile(const std::string &filename) {
    std::ifstream file(filename);
    std::string line;
    while (std::getline(file, line)) {
        std::cout << line << '\n';
    }
}

int main() {
    ReadFile("text-file.txt");
    return 0;
}
