#include <algorithm>
#include <cctype>
#include <fstream>
#include <iostream>
#include <sstream>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <utility>
#include <vector>

// Common English stop words that should be ignored
const std::unordered_set<std::string> STOP_WORDS = {
    "a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "from",
    "has", "have", "he", "i", "in", "is", "it", "its", "of", "on", "or",
    "she", "that", "the", "their", "they", "this", "to", "was", "we",
    "were", "which", "will", "with", "you"};

// Lowercase a word and strip every non-letter/digit character
// (so "World!" -> "world", "place." -> "place")
std::string cleanWord(const std::string &word) {
    std::string result;
    for (unsigned char c : word) {
        if (std::isalnum(c)) {
            result += static_cast<char>(std::tolower(c));
        }
    }
    return result;
}

// Read the file and count how often each non-stop word appears
bool countWords(const std::string &filename,
                std::unordered_map<std::string, int> &counts) {
    std::ifstream file(filename);
    if (!file.is_open()) {
        return false;
    }

    std::string token;
    while (file >> token) {
        std::string word = cleanWord(token);
        if (!word.empty() && STOP_WORDS.find(word) == STOP_WORDS.end()) {
            ++counts[word];
        }
    }
    return true;
}

// Sort by count (highest first); alphabetical order breaks ties
std::vector<std::pair<std::string, int>>
sortByFrequency(const std::unordered_map<std::string, int> &counts) {
    std::vector<std::pair<std::string, int>> sorted(counts.begin(), counts.end());
    std::sort(sorted.begin(), sorted.end(),
              [](const std::pair<std::string, int> &a,
                 const std::pair<std::string, int> &b) {
                  if (a.second != b.second) return a.second > b.second;
                  return a.first < b.first;
              });
    return sorted;
}

int main() {
    std::unordered_map<std::string, int> counts;

    if (!countWords("input.txt", counts)) {
        std::cerr << "Error: could not open input.txt" << std::endl;
        return 1;
    }

    for (const auto &entry : sortByFrequency(counts)) {
        std::cout << entry.first << " - " << entry.second << std::endl;
    }
    return 0;
}
