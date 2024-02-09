#include <iostream>
#include <fstream>
#include <map>
#include <string>
#include <unordered_set>
using namespace std;

void parse (ifstream& file){
   
   // stop words to exclude
    unordered_set<string> stopWords;
    stopWords.insert("the");
    stopWords.insert("is");
    stopWords.insert("at");
    stopWords.insert("which");
    stopWords.insert("on");
    stopWords.insert("a");

    // storing words and counts
    map<string, int> wordMap;

    string line = "";
    
    // check each line for words
    while (getline(file, line)){
        
        string word = "";

        // checking each character in a line
        for (int i = 0; i < line.length(); i++){
            char c = line[i];

            // add letters to the current word
            if (isalpha(c)) word += tolower(c);
            else{
                // add word to the map
                if (word != "" && stopWords.find(word) == stopWords.end()) wordMap[word]++;
                word = "";
            } 
        }

        // add the last word
        if (word.length() > 0) wordMap[word]++;
  
    }

    // print words and counts in most frequent order
    for (map<string, int>::reverse_iterator iter = wordMap.rbegin(); iter != wordMap.rend(); iter++){
        cout << iter->first << " - " << iter->second << endl;
    }

    return;
}
int main() {

    // input file
    ifstream file ("input.txt");

    // checks file is open
    if(file.is_open()){
        parse(file);
    }
    else{
        cout << "File is not open!" << endl;
    }

    return 0;

}
