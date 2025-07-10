#include <iostream>
#include <fstream>
#include <sstream>
#include <unordered_map>
#include <unordered_set>
#include <vector>
#include <algorithm>
#include <cctype>

std::string toLower(const std::string& str) {
    std::string result;
    for (char ch : str) result += std::tolower(ch);
    return result;
}

std::string cleanWord(const std::string& word) {
    std::string result;
    for (char ch : word) {
        if (std::isalpha(ch)) result += std::tolower(ch);
    }
    return result;
}

int main() {
    std::ifstream file("input.txt");
    if (!file) return 1;

    std::unordered_set<std::string> stopWords = {
        "the", "is", "at", "which", "on", "and", "a", "an", "of", "in", "to", "with", "by", "for", "as", "that"
    };

    std::unordered_map<std::string, int> wordCount;
    std::string line;

    while (std::getline(file, line)) {
        std::istringstream iss(line);
        std::string word;
        while (iss >> word) {
            std::string cleaned = cleanWord(word);
            if (!cleaned.empty() && stopWords.find(cleaned) == stopWords.end()) {
                ++wordCount[cleaned];
            }
        }
    }

    std::vector<std::pair<std::string, int>> sortedWords(wordCount.begin(), wordCount.end());
    std::sort(sortedWords.begin(), sortedWords.end(), [](const auto& a, const auto& b) {
        return b.second < a.second ? false : (b.second == a.second ? a.first < b.first : true);
    });

    for (const auto& entry : sortedWords) {
        std::cout << entry.first << " - " << entry.second << std::endl;
    }

    return 0;
}
