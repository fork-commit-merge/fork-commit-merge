// C++ - Medium

#include "FileHandler.h"
#include <fstream>
#include <sstream>

std::string FileHandler::ReadFile(const std::string& filename)
{
    std::ifstream file(filename);
       
        if (!file)
        {
            return "";
        }

        std::stringstream buffer;
        buffer << file.rdbuf();

        return buffer.str();
}

bool FileHandler::WriteFile(const std::string& filename, const std::string& content)
{
    std::ofstream file(filename);

    if (!file)
    {
        return false;
    }

    file << content;

    return true;
}

bool FileHandler::AppendFile(const std::string& filename, const std::string& content)
{
    std::ofstream file(filename, std::ios::app);

    if (!file)
    {
        return false;
    }

    file << content;

    return true;
}

bool FileHandler::FileExists(const std::string& filename)
{
    std::ifstream file(filename);
    return file.good();
}

