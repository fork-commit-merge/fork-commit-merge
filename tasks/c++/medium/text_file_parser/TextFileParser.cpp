#include <iostream>
#include <fstream>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
#include <algorithm>
#include <cctype>

const std::unordered_set<std::string>& stopWords() {
    static const std::unordered_set<std::string> words = {
        "the", "is", "at", "which", "on", "a", "an", "and", "or", "but",
        "in", "of", "to", "it", "its", "as", "be", "are", "was", "were",
        "this", "that", "these", "those", "for", "with", "by", "not",
        "from", "have", "has", "had", "do", "does", "did"
    };
    return words;
}

std::string normalizeWord(const std::string& token) {
    std::string word;
    for (char ch : token) {
        if (std::isalnum(static_cast<unsigned char>(ch))) {
            word += std::tolower(static_cast<unsigned char>(ch));
        }
    }
    return word;
}

int main() {
    std::ifstream file("input.txt");
    if (!file.is_open()) {
        std::cerr << "Error: could not open input.txt\n";
        return 1;
    }

    std::unordered_map<std::string, int> counts;
    std::vector<std::string> insertionOrder;

    std::string token;
    while (file >> token) {
        std::string word = normalizeWord(token);
        if (word.empty() || stopWords().count(word)) {
            continue;
        }
        if (counts.find(word) == counts.end()) {
            insertionOrder.push_back(word);
        }
        counts[word]++;
    }

    std::vector<std::pair<std::string, int>> sorted(counts.begin(), counts.end());
    std::stable_sort(sorted.begin(), sorted.end(),
        [](const auto& a, const auto& b) { return a.second > b.second; });

    for (const auto& entry : sorted) {
        std::cout << entry.first << " - " << entry.second << '\n';
    }

    return 0;
}
