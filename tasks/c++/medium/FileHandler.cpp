#include "FileHandler.h"
#include <fstream>
#include <sstream>

int FileHandler::WriteFile(const std::string& filePath, const std::string& text) {
	std::ofstream file;
	file.open(filePath, std::ofstream::out);
	if(!file) return 0;
	file << text;
	file.close();
	return 1;
}

int FileHandler::AppendFile(const std::string& filePath, const std::string& text) {
	std::ofstream file;
	file.open(filePath, std::ofstream::app);
	if(!file) return 0;
	file << text;
	file.close();
	return 1;
}

std::string FileHandler::ReadFile(const std::string& filePath) {
	std::ifstream file(filePath);
	std::string text;
	text.assign(std::istreambuf_iterator<char>(file), std::istreambuf_iterator<char>());
	file.close();
	return text;
}

bool FileHandler::FileExists(const std::string& filePath) {
	std::ifstream file(filePath);
	if(!file.good()) return 0;
	file.close();
	return 1;
}
