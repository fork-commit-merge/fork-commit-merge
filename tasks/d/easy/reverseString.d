// D - Easy

import std.stdio;

void main() {
    char[] temp = "Hello World!".dup;
    char[] ans;
    int len = cast(int) temp.length;
    ans.length = len;
    for(int i=cast(int)temp.length-1;i>=0;i--){
        ans[(len-i)-1]=cast(char) temp[i];
    }
    writeln(ans);
}
