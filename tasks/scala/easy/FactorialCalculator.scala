// Scala - Easy
import scala.io.StdIn
object FactorialCalculator {
  def main(args: Array[String]): Unit = {
    println("Enter a number: ")
    val input = StdIn.readInt() 
    val result = factorial(input) 
    println(s"The factorial of $input is $result")
  }

  def factorial(n: Int): BigInt = {
     if (n <= 1) 1 
    else n * factorial(n - 1) 
  }
}




