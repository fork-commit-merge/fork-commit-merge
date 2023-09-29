    void breakContinue() {
      for (int i = 1; i <= 10; i++) {
        if (i % 3 == 0) {
          continue;
        }
        print(i);
      }
    }
     
    /*
    output :
      1
      2
      4
      5
      7
      8
      10
    */