#include <iostream>
#include <string>
using namespace std;

string reverseString(string rev_word ) {
    // TODO: Implement the reverseString function
    //  string rev_word;
    //  cout<<"Enter the word that you want to be get reversed : ";
    //  cin>>word;
     for(int i=rev_word.length()-1;i>=0;i--){
         cout<<rev_word[i]<<" ";
     }


}

int main() {
    // TODO: Implement the main method
    reverseString("arnav");
}

