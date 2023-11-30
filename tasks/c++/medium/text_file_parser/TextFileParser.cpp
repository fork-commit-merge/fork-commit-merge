#include <iostream>
#include <fstream>
#include <sstream>
#include <map>
#include <vector>
#include <algorithm>
#include <cctype>
#include <set>

// Function to convert string to lower case
std::string toLowerCase(const std::string& str) {
    std::string lowerStr = str;
    std::transform(lowerStr.begin(), lowerStr.end(), lowerStr.begin(),
                   [](unsigned char c){ return std::tolower(c); });
    return lowerStr;
}

// Function to check if a word is a stop word
bool isStopWord(const std::string& word, const std::set<std::string>& stopWords) {
    return stopWords.find(word) != stopWords.end();
}

// Function to read file and return word frequency
std::map<std::string, int> wordFrequency(const std::string& fileName, const std::set<std::string>& stopWords) {
    std::map<std::string, int> freq;
    std::ifstream file(fileName);
    std::string word;

    if (!file.is_open()) {
        std::cerr << "Could not open the file - '" << fileName << "'" << std::endl;
        return freq;
    }

    while (file >> word) {
        word = toLowerCase(word); // Convert to lowercase
        // Remove non-alphabetic characters
        word.erase(std::remove_if(word.begin(), word.end(), [](char c) { return !std::isalpha(c); }), word.end());

        if (!isStopWord(word, stopWords) && !word.empty()) {
            freq[word]++;
        }
    }

    file.close();
    return freq;
}

// Function to sort and print the word frequency
void printSortedFrequency(const std::map<std::string, int>& freq) {
    // Convert map to vector of pairs
    std::vector<std::pair<std::string, int>> vec(freq.begin(), freq.end());

    // Sort the vector by frequency
    std::sort(vec.begin(), vec.end(), [](const std::pair<std::string, int>& a, const std::pair<std::string, int>& b) {
        return a.second > b.second;
    });

    // Print the sorted words and their frequencies
    for (const auto& pair : vec) {
        std::cout << pair.first << " - " << pair.second << std::endl;
    }
}

int main() {
    std::set<std::string> stopWords = {"the", "is", "at", "which", "on"};
    auto freq = wordFrequency("input.txt", stopWords);
    printSortedFrequency(freq);
    return 0;
}
