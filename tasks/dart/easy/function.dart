    void main() {
      greet(); // output : Hello!
    }
     
    void greet() {
      print('Hello!');
    }



        void dicoding() {

       cetak_halo('Dicoding', 2015);  // output : Halo Dicoding! Tahun ini Anda berusia 5 tahun

           }
     
    void cetak_halo(String name, bornYear) {
      var age = 2020 - bornYear;
      print('Halo $name! Tahun ini Anda berusia $age tahun');
    }


     void rata_rata() {
      var firstNumber = 7;
      var secondNumber = 10;
      print('Rata-rata dari $firstNumber & $secondNumber adalah ${average(firstNumber, secondNumber)}');
    }
     
    double average(num num1, num num2) {
      return (num1 + num2) / 2;
    }

