# CoffeeScript - Medium

# TODO: Create functions for addition, subtraction, multiplication, and division. Each function should take two arguments and return the result.
add = (a, b) -> a + b
subtract = (a, b) -> a - b
multiply = (a, b) -> a * b
divide = (a, b) -> 
    if b == 0
      throw new Error("Division by zero is not allowed")
    a / b

#! Don't modify or remove the tests below!
try
  console.log(add(5, 3)) # Output should be 8
  console.log(subtract(10, 4)) # Output should be 6
  console.log(multiply(2, 7)) # Output should be 14
  console.log(divide(16, 4)) # Output should be 4
  console.log(divide(16, 0)) # Should throw an error
catch e
  console.error(e.message)
