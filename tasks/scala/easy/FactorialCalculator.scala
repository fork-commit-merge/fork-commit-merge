import scala.io.StdIn

object FactorialCalculator {
  def main(args: Array[String]): Unit = {
    println("Enter a number:")
    val userInput = StdIn.readInt()

    if (userInput < 0) {
      println("Factorial is not defined for negative numbers.")
    } else {
      val result = factorial(userInput)
      println(s"Factorial of $userInput is: $result")
    }
  }

  def factorial(n: Int): BigInt = {
    if (n == 0 || n == 1) 1
    else n * factorial(n - 1)
  }
}
