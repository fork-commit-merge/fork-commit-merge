#include <iostream>
#include <fstream>
#include <string>
#include <unordered_map>
#include <algorithm>
#include <vector>

// TODO: Create the necessary functions for the program to work

bool isStopWord(const std::string& word) {
    static const std::unordered_map<std::string, bool> stopWords {
        {"the", true}, {"is", true}, {"at", true}, {"which", true}, {"on", true},
        {"and", true}, {"in", true}, {"to", true}, {"of", true}, {"a", true}, {"an", true}
    };
    return stopWords.find(word) != stopWords.end();
}

int main() {
    // TODO: Implement the main method
    std::ifstream file("input.txt");
    if (!file.is_open()) {
        std::cerr << "Fail to open file.\n";
        return 1;
    }

    std::unordered_map<std::string, int> wordFreq;
    std::string word;
    while (file >> word)
        if (std::all_of(word.begin(), word.end(), [](char c) { return std::isalpha(c); }))
            if (!isStopWord(word)) wordFreq[word]++;

    std::vector<std::pair<std::string, int>> sortedFreq(wordFreq.begin(), wordFreq.end());
    std::sort(sortedFreq.begin(), sortedFreq.end(), [](const auto& a, const auto& b) { return a.second > b.second; });
    for (const auto& pair : sortedFreq) std::cout << pair.first << " - " << pair.second << std::endl;

    return 0;
}
