// Scala - Easy

object FactorialCalculator {
  def main(args: Array[String]): Unit = {
    println("Enter a number to calculate its factorial:")
    val input = scala.io.StdIn.readLine()
    val n = input.toInt
    val result = factorial(n)
    println(s"Factorial of $n is $result")
  }

  def factorial(n: Int): BigInt = {
    if (n <= 1) 1
    else n * factorial(n - 1)
  }
}
