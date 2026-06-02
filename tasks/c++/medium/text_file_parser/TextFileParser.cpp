#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <map>
#include <algorithm>
#include <set>
#include <cctype>

/**
 * Requirements:
 * 1. Read input.txt
 * 2. Ignore case
 * 3. Exclude stop words: "the", "is", "at", "which", "on"
 * 4. Sort by frequency (most frequent first)
 */

std::string cleanWord(const std::string& word) {
    std::string cleaned;
    for (char c : word) {
        if (std::isalnum(c)) {
            cleaned += std::tolower(c);
        }
    }
    return cleaned;
}

bool isStopWord(const std::string& word) {
    static const std::set<std::string> stopWords = {"the", "is", "at", "which", "on", "a"};
    return stopWords.find(word) != stopWords.end();
}

int main() {
    std::ifstream inputFile("input.txt");
    if (!inputFile.is_open()) {
        std::cerr << "Error: Could not open input.txt" << std::endl;
        return 1;
    }

    std::map<std::string, int> wordCounts;
    std::string word;

    while (inputFile >> word) {
        std::string cleaned = cleanWord(word);
        if (!cleaned.empty() && !isStopWord(cleaned)) {
            wordCounts[cleaned]++;
        }
    }
    inputFile.close();

    // Convert map to vector for sorting
    std::vector<std::pair<std::string, int>> sortedWords(wordCounts.begin(), wordCounts.end());

    // Sort by frequency (descending), then alphabetically for consistency
    std::sort(sortedWords.begin(), sortedWords.end(), [](const auto& a, const auto& b) {
        if (a.second != b.second) {
            return a.second > b.second;
        }
        return a.first < b.first;
    });

    // Output results
    for (const auto& pair : sortedWords) {
        std::cout << pair.first << " - " << pair.second << std::endl;
    }

    return 0;
}
