#include <iostream>
#include <fstream>
#include <string>
#include <map>
#include <set>
#include <algorithm>
#include <vector>
#include <cctype>
#include <cstdio>
// TODO: Create the necessary functions for the program to work

std::string toLower(const std::string& s) {
    std::string lower_s = s;
    std::transform(lower_s.begin(), lower_s.end(), lower_s.begin(),
                   [](unsigned char c){ return std::tolower(c); });
    return lower_s;
}


std::string removePunctuation(const std::string& s) {
    std::string result;
    for (char c : s) {
        if (!std::ispunct(static_cast<unsigned char>(c))) {
            result += c;
        }
    }
    return result;
}


bool comparePairs(const std::pair<std::string, int>& a, const std::pair<std::string, int>& b) {
    return a.second > b.second; 
}



int main() {
    // TODO: Implement the main method
    std::string filePath = "input.txt";
    std::ifstream inputFile(filePath); 

    if (!inputFile.is_open()) { 
        std::cerr << "Error opening input.txt" << std::endl;
        perror("");
        return 1; 
    }

    
    std::set<std::string> stopWords = {
        "the", "is", "at", "which", "on", "a", "an", "and", "but", "if", "or", "because",
        "as", "until", "while", "of", "by", "for", "with", "about", "against", "between",
        "into", "through", "during", "before", "after", "above", "below", "to", "from",
        "up", "down", "in", "out", "off", "over", "under", "again", "further", "then",
        "once", "here", "there", "when", "where", "why", "how", "all", "any", "both",
        "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not",
        "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will",
        "just", "don", "should", "now", "i", "me", "my", "myself", "we", "our", "ours",
        "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his",
        "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them",
        "their", "theirs", "themselves", "what", "who", "whom", "this", "that", "these",
        "those", "am", "are", "was", "were", "be", "been", "being", "have", "has", "had",
        "having", "do", "does", "did", "doing"
    };

    std::map<std::string, int> wordFrequency; 
    std::string word;

    while (inputFile >> word) { 
        word = toLower(word); // Convert to lowercase
        word = removePunctuation(word); // Remove punctuation

        if (word.empty() || stopWords.count(word)) { // Ignore empty words or stop words
            continue;
        }

        wordFrequency[word]++; // Increment word count
    }

    inputFile.close(); 

    
    std::vector<std::pair<std::string, int>> sortedWords(wordFrequency.begin(), wordFrequency.end());

    // Sort the vector using the custom comparison function
    std::sort(sortedWords.begin(), sortedWords.end(), comparePairs);

    
    for (const auto& pair : sortedWords) {
        std::cout << pair.first << ": " << pair.second << std::endl;
    }


    return 0;
}
