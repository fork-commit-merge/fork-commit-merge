// C++ - Medium

#include "FileHandler.h"  // FileHandler class
#include <fstream>        // std::ifstream, std::ofstream
#include <sstream>        // std::stringstream

std::string FileHandler::ReadFile(const std::string& filePath)
{
  // Input stream
  std::ifstream file;

  file.open(filePath);

  if (file.is_open())
  {
    // Stringstream to build contents of file
    std::stringstream ss;
    // Temporary string to hold each line
    std::string linestr;
    // State flag so we don't start with a newline
    bool bFirstLine = true;

    // Concatenate each line to stringstream
    while (std::getline(file, linestr))
    {
      if (bFirstLine)
      {
        ss << linestr;
        bFirstLine = false;
      }
      else ss << '\n' << linestr;
    }
    file.close();

    return ss.str();
  }
  else return "File could not be read.";
}

bool FileHandler::WriteFile(const std::string& filePath, const char* toWrite)
{
  // Output stream
  std::ofstream file;

  file.open(filePath);

  if (file.is_open())
  {
    file << toWrite;
    // Check if writing is successful.
    bool bSuccess = file.good();
    file.close();
    return bSuccess;
  }
  else return false;
}

bool FileHandler::AppendFile(const std::string& filePath, const char* toAppend)
{
  // Output stream
  std::ofstream file;

  file.open(filePath, std::ios::app);

  if (file.is_open())
  {
    file << toAppend;
    // Check if writing is successful.
    bool bSuccess = file.good();
    file.close();
    return bSuccess;
  }
  else return false;
}

bool FileHandler::FileExists(const std::string& filePath)
{
  // Input stream
  std::ifstream file;

  file.open(filePath);
  if (file.good())
  {
    file.close();
    return true;
  }
  else return false;
}
