#pragma once
#include <string>

class FileHandler {
public:
	static int	WriteFile	(const std::string& filePath, const std::string& text);
	static int	AppendFile	(const std::string& filePath, const std::string& text);
	static std::string	ReadFile	(const std::string& filePath);
	static bool	FileExists	(const std::string& filePath);
};
