#include <iostream>
#include <string>

std::string reverseString(const std::string &str) {
    // TODO: Implement the reverseString function
    int i,len=0;
        std::string m;
      len=str.size();
      for(int i=0;i<len;i++){
          m+=str[len-i-1];
      }
      return m;
      
}

int main() {
    // TODO: Implement the main method
    std::string str;
    std::cout<<"provide string\n";
    std::cin>>str;
    std::string k = reverseString(str);
    std::cout<<k;
    return 0;
}



