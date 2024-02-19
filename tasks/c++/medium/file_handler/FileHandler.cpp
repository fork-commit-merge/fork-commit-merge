bool FileHandler::WriteFile(const std::string& filePath, const std::string& content) {
    std::ofstream out(filePath);
    if (!out.is_open()) {
        return false;
    }
    out << content;
    out.close();
    return true;
}

bool FileHandler::AppendFile(const std::string& filePath, const std::string& additionalContent) {
    std::ofstream out(filePath, std::ios_base::app);
    if (!out.is_open()) {
        return false;
    }
    out << additionalContent;
    out.close();
    return true;
}

std::string FileHandler::ReadFile(const std::string& filePath) {
    std::ifstream in(filePath);
    std::stringstream buffer;
    if (!in.is_open()) {
        return "";
    }
    buffer << in.rdbuf();
    in.close();
    return buffer.str();
}

bool FileHandler::FileExists(const std::string& filePath) {
    std::ifstream in(filePath);
    return in.good();
}

