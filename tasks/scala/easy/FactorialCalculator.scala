// Scala - Easy

object FactorialCalculator {
  def main(args: Array[String]): Unit = {
    // TODO: Create a simple Scala program that takes a number from the user and prints the factorial of that number
    var valid = false
    var number = 0

    while (!valid) {
      println("Enter a non-negative integer:")
      try {
        number = readLine().toInt
        if (number < 0) {
          println("Error: Number must be non-negative.")
        } else {
          valid = true
        }
      } catch {
        case _: NumberFormatException => println("Error: Please enter a valid integer.")
      }
    }

    println(s"Factorial of $number = ${factorial(number)}")
  }
  

  def factorial(n: Int): BigInt = {
    // TODO: Create factorial function
     if (n == 0) 1
    else n * factorial(n - 1)
  }
  
}
