// ReScript - Easy

// TODO: Create a ReScript program to calculate Fibonacci sequence
let fibonacci = n => {
  let rec fibHelper = (a, b, count) =>
    if count == 0 {
      ()
    } else {
      Js.log(a)
      fibHelper(b, a + b, count - 1)
    }
  
  fibHelper(0, 1, n)
}

// Main function to execute when the program runs
let main = () => {
  Js.log("Fibonacci sequence up to 10:")
  fibonacci(10)
}

// Call main to execute the program
main()
