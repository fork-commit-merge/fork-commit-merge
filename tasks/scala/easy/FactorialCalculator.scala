// Scala - Easy

import scala.io.StdIn.readLine

object FactorialCalculator {
  def main(args: Array[String]): Unit = {
    var validInput = false

    while (!validInput) {
      print("Enter a non-negative integer: ")

      val input = readLine()

      try {
        val number = input.toInt

        if (number < 0) {
          println("Invalid input. Please enter a non-negative integer.")
        } else {
          println(s"Factorial of $number = ${factorial(number)}")
          validInput = true
        }
      } catch {
        case _: NumberFormatException =>
          println("Invalid input. Please enter a valid integer.")
      }
    }
  }

  def factorial(n: Int): BigInt = {
    if (n == 0) {
      BigInt(1)
    } else {
      BigInt(n) * factorial(n - 1)
    }
  }
}