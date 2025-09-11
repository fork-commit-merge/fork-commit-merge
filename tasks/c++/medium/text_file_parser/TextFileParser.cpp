#include <bits/stdc++.h>
using namespace std;
// TODO: Create the necessary functions for the program to work

int main() 
{
    ifstream file("input.txt");
    if (!file)
    {
        cerr << "Error: Could not open input.txt\n";
        return 1;
    }

    unordered_set<string> stop_words = {
        "the", "is", "at", "which", "on", "a", "an", "and", "or", "in", "to", "of"};

    // TODO: Implement the main method
    vector<string>lines;
    while(file) 
    {
        string line;
        getline(file, line);
        lines.push_back(line);
    }
    unordered_map<string, int> word_count;
    for(auto line: lines) 
    {
        stringstream ss(line);
        string word;
        while(ss >> word) 
        {
            word.erase(remove_if(word.begin(), word.end(), ::ispunct), word.end());
            transform(word.begin(), word.end(), word.begin(), ::tolower);
            if(stop_words.find(word) == stop_words.end()) 
            {
                word_count[word]++;
            }
        }
    }
    vector<pair<string, int>> freq(word_count.begin(), word_count.end());
     sort(freq.begin(), freq.end(), [](const pair<string, int> &a, const pair<string, int> &b) {
        return a.second > b.second;
    });
    for (auto wc: freq) 
    {
        cout << wc.first << " - " << wc.second << endl;
    }

    return 0;
}
