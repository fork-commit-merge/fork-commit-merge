# CoffeeScript - Medium

# Function for addition
add = (num1, num2) ->
  num1 + num2

# Function for subtraction
subtract = (num1, num2) ->
  num1 - num2

# Function for multiplication
multiply = (num1, num2) ->
  num1 * num2

# Function for division
divide = (num1, num2) ->
  if num2 == 0
    throw new Error("Cannot divide by zero")
  else
    num1 / num2

# Don't modify or remove the tests below!
try
  console.log(add(5, 3))       # Output should be 8
  console.log(subtract(10, 4))  # Output should be 6
  console.log(multiply(2, 7))   # Output should be 14
  console.log(divide(16, 4))    # Output should be 4
  console.log(divide(16, 0))    # Should throw an error
catch e
  console.error(e.message)
