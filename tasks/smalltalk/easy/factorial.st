" Smalltalk - Easy "

" TODO: Implement the Factorial class "

Object subclass: #Factorial
    instanceVariableNames: ''
    classVariableNames: ''
    poolDictionaries: ''
    category: 'Math'.

Factorial class >> of: n
    "Calculate the factorial of a number"
    n = 0 ifTrue: [ ^ 1 ].
    n < 0 ifTrue: [ self error: 'Factorial not defined for negative numbers' ].
    ^ n * (self of: n - 1).

"Test the factorial"
Transcript show: 'Factorial of 5 is: ', (Factorial of: 5) printString; cr.
