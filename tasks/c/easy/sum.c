#include <stdio.h>

// TODO: Implement the sum and main functions
int sum(int a,int b){
  return a+b;
}

int main(){
  int a;
  int b;
  printf("Give int");
  scanf("%d %d", &a,&b);
  int k = sum(a,b);
  printf("your sum = %d",k);
  return 0;
}
