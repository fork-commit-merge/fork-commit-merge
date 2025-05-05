// Kotlin - Easy

fun main() {
    // A Simple Kotlin Program to Print User's Input
    println("What's your name?")
    val name = readLine()?.trim() ?: "Stranger"
    println("Hello, $name!")
}
