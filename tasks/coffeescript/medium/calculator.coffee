# CoffeeScript - Medium

# TODO: Create functions for addition, subtraction, multiplication, and division. Each function should take two arguments and return the result.
# Validate inputs
validate = (a, b) ->
  if typeof a isnt 'number' or typeof b isnt 'number'
    throw new Error("Both arguments must be numbers")

# Addition
add = (a, b) ->
  validate(a, b)
  a + b

# Subtraction
subtract = (a, b) ->
  validate(a, b)
  a - b

# Multiplication
multiply = (a, b) ->
  validate(a, b)
  a * b

# Division
divide = (a, b) ->
  validate(a, b)
  throw new Error("Cannot divide by zero") if b == 0
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
