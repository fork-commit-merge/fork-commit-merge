// Kotlin - Easy

fun main() {
    // TODO: Create a Simple Kotlin Program to Print User's Input
    val scanner = Scanner(System.`in`)

    print("Enter something: ")
    val userInput = scanner.nextLine()

    println("You entered: $userInput")

    scanner.close()
}
