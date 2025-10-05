// Kotlin - Easy

fun main() {
    // TODO: Create a Simple Kotlin Program to Print User's Input
    print("Enter your name: ")
    val name = readLine()

    if (name.isNullOrBlank()) {
        println("Error: Name cannot be empty.")
    } else {
        println("Hello, $name!")
    }
}
