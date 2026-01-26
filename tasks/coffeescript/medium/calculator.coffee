# CoffeeScript - Medium

validateNumbers = (a, b) ->
  unless typeof a is 'number' and typeof b is 'number'
    throw new Error('Both arguments must be numbers')

add = (a, b) ->
  validateNumbers(a, b)
  a + b

subtract = (a, b) ->
  validateNumbers(a, b)
  a - b

multiply = (a, b) ->
  validateNumbers(a, b)
  a * b

divide = (a, b) ->
  validateNumbers(a, b)
  if b is 0
    throw new Error('Division by zero is not allowed')
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
