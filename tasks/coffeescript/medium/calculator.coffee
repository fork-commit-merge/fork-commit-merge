# CoffeeScript - Medium

validate = (a, b) ->
  unless typeof a is 'number' and typeof b is 'number'
    throw new Error('Invalid input: both arguments must be numbers')

add = (a, b) ->
  validate(a, b)
  a + b

subtract = (a, b) ->
  validate(a, b)
  a - b

multiply = (a, b) ->
  validate(a, b)
  a * b

divide = (a, b) ->
  validate(a, b)
  throw new Error('Cannot divide by zero') if b is 0
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
