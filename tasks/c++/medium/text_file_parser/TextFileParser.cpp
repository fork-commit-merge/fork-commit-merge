#include <algorithm>
#include <cctype>
#include <fstream>
#include <iostream>
#include <iterator>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>

// Get file Context(Text inside)
std::string getContext(const std::string &path) {
  std::ifstream f(path, std::ios::binary);
  if (!f) {
    throw std::runtime_error("Cannot open file: " + path);
  }
  return std::string(std::istreambuf_iterator<char>(f),
                     std::istreambuf_iterator<char>());
}

// Exctract words from some text
std::vector<std::string> extractWords(const std::string &text) {
  std::vector<std::string> words;
  std::string current;

  for (char c : text) {
    if (std::isalpha(static_cast<unsigned char>(c))) {
      current.push_back(std::tolower(c));
    } else {
      if (!current.empty()) {
        words.push_back(current);
        current.clear();
      }
    }
  }

  if (!current.empty()) {
    words.push_back(current);
  }

  return words;
}

int main() {
  try {
    std::string text = getContext("input.txt");

    std::unordered_set<std::string> stop_words;

    // Extract forbidden words
    std::ifstream f("forbidden_words.txt");
    if (!f) {
      throw std::runtime_error("Cannot open forbidden_words.txt");
    }

    std::string w;
    while (f >> w) {
      for (auto &c : w)
        c = std::tolower(c);
      stop_words.insert(w);
    }

    std::vector<std::string> words = extractWords(text);
    std::unordered_map<std::string, int> freq;

    for (const std::string &w : words) {
      if (!stop_words.count(w)) {
        freq[w]++;
      }
    }

    std::vector<std::pair<std::string, int>> result(freq.begin(), freq.end());

    std::sort(result.begin(), result.end(), [](auto &a, auto &b) {
      return a.second < b.second   ? false
             : a.second > b.second ? true
                                   : a.first < b.first;
    });

    for (auto &[word, count] : result) {
      std::cout << word << " - " << count << "\n";
    }
  } catch (std::exception &e) {
    std::cerr << "Error: " << e.what() << "\n";
    return 1;
  }

  return 0;
}
