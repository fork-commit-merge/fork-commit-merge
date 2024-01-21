#include <set>
#include <vector>
#include <map>
#include <iostream>
#include <fstream>
#include <string>
#include <algorithm>
#include <sstream>

using namespace std;


void checkUpperCase(string& str)
{
    for(int i=0;i<str.size();i++)
    {
        if(isupper(str[i]))
        {
            str[i] = tolower(str[i]);
        }
    }
    return;
}


bool findCommon(string str,set<string> &st)
{
    if(st.find(str) == st.end())
    return false;

    return true;

}

string removeSpecialCharacter(string s)
{
    string ans = "";
    for (auto ch : s) 
    {
        if (isalpha(ch) || ch == ' ')
            ans += ch;
    }
    return ans;
}

bool mysrt(pair<int,string> a, pair<int,string> b)
{
    return a.first > b.first;
}

int main() {
    
    string text;
    ifstream readFile("input.txt");

    vector<string> commonStopWords = {
        "a", "an", "and", "are", "as", "at", "be", "but", "by", "for",
        "if", "in", "into", "is", "it", "no", "not", "of", "on", "or",
        "such", "that", "the", "their", "then", "there", "these", "they",
        "this", "to", "was", "will", "with"
    };

    set<string> st(commonStopWords.begin(), commonStopWords.end());
    
    map<string,int> mp;

    while(getline(readFile,text))
    {
        string str = text;
        checkUpperCase(str);
        str = removeSpecialCharacter(str);

        istringstream iss(str);
        string word;

        while(iss >> word)
        {
            if(!findCommon(word,st))
            {
                mp[word]++;
            }
        }
    }

    vector<pair<int,string>> vt;
    for(auto x : mp)
    {
        vt.push_back({x.second,x.first});
    }

    sort(vt.begin(),vt.end(),mysrt);

    for(auto x : vt)
    cout<<x.second<<" - "<<x.first<<endl;

    readFile.close();

    return 0;
}
