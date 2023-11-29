#include <iostream>
#include <fstream>
#include <map>
#include <vector>
#include <algorithm>
#include <cctype>

// Function to convert a string to lower case and remove non-alphabetic characters
std::string ProcessWord(const std::string& str) {
    std::string processedWord;
    for (size_t i = 0; i < str.length(); ++i) {
        if (std::isalpha(str[i])) {
            processedWord += std::tolower(str[i]);
        }
    }
    return processedWord;
}

// Function to check if a word is a stop word
bool IsStopWord(const std::string& word) {
    static const char* arr[] = {"the", "is", "at", "which", "on", "and", "in", "to", "of", "a", "an"};
    static const std::vector<std::string> stopWords(arr, arr + sizeof(arr) / sizeof(arr[0]));
    for (size_t i = 0; i < stopWords.size(); ++i) {
        if (stopWords[i] == word) {
            return true;
        }
    }
    return false;
}

// Custom comparator for sorting
bool CompareFrequency(const std::pair<std::string, int>& a, const std::pair<std::string, int>& b) {
    return a.second > b.second; // Sort in descending order of frequency
}

int main() {
    std::ifstream file("input.txt");
    if (!file.is_open()) {
        std::cerr << "Error opening file" << std::endl;
        return 1;
    }

    std::map<std::string, int> wordCount;
    std::string word;
    while (file >> word) {
        word = ProcessWord(word); // Convert word to lowercase and remove punctuation
        if (!IsStopWord(word) && !word.empty()) {
            wordCount[word]++;
        }
    }

    // Sorting the map by value (frequency)
    std::vector<std::pair<std::string, int> > sortedWords(wordCount.begin(), wordCount.end());
    std::sort(sortedWords.begin(), sortedWords.end(), CompareFrequency);

    // Displaying the results
    for (std::vector<std::pair<std::string, int> >::const_iterator it = sortedWords.begin(); it != sortedWords.end(); ++it) {
        std::cout << it->first << " - " << it->second << std::endl;
    }

    return 0;
}
