#include <iostream>
#include <map>
#include <sstream>
#include <algorithm>
#include <cctype>
#include <string>
#include <set>
#include <vector>
using namespace std;


void Process(string line, map<string, int>& wordCount){

    static const set<string> stopWords = {
        "the", "is", "at", "which", "on", "a", "an", "and", "in", "to", "of", "it"
    };

    stringstream ss(line);
    string word;
    while(ss>>word){

        transform(word.begin(), word.end(), word.begin(), [](unsigned char c) {
            return tolower(c);
        });


        word.erase(remove_if(word.begin(), word.end(), [](unsigned char c) {
            return ispunct(c);
        }), word.end());


        if(!word.empty()){
            if(stopWords.find(word) == stopWords.end()){
                wordCount[word]++;
            }
        }
    }
}


int main() {
    string line;
    map<string, int> wordCount; 
    while(getline(cin, line)){
        Process(line, wordCount);
    }
    
    
    vector<pair<string, int>> sortedWords(wordCount.begin(), wordCount.end());
    
    stable_sort(sortedWords.begin(), sortedWords.end(), [](const pair<string, int>& a, const pair<string, int>& b) {
        return a.second > b.second; 
    });
    
    for(const auto& pair : sortedWords){
        cout << pair.first << " - " << pair.second << endl;
    }
    
    return 0;
}

    
